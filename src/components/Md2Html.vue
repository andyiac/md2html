<template>
    <div id="md-2-html">
        <div class="edit-area">
            <div class="title">
               <h2>md2html</h2> 
               <p>
               Just convert you markdown to HTML with basic style. 
               </p>
            </div>
            <div class="content">
                <div class="tab-title">
                    <button :class="{'active-btn': whichTab == 'md-tab'}" @click="whichTab = 'md-tab'">markdown</button>
                    <button :class="{'active-btn': whichTab == 'css-tab'}" @click="whichTab = 'css-tab'">css</button>
                    <button :class="{'active-btn': whichTab == 'config-tab'}" @click="whichTab = 'config-tab'">config</button>
                    <button :class="{'active-btn': whichTab == 'about-tab'}" @click="whichTab = 'about-tab'">about</button>
                    <button @click="download()">download</button>
                </div>

                <div class="md-tab tab" :class="{'active': whichTab == 'md-tab'}">
                    <textarea id="code" name="code" v-model="markdownSource" placeholder="markdown source"></textarea>
                </div>
                <div class="css-tab tab" :class="{'active': whichTab == 'css-tab'}">
                    <textarea id="css-code" name="css-code" v-model="cssSource" placeholder="css source"></textarea>
                </div>
                <div class="config-tab tab" :class="{'active': whichTab == 'config-tab'}">
                    <input style="width:100px; height: 24px; outline: none" type="text" v-model="docTitle" placeholder="document title">
                </div>
                <div class="about-tab tab" :class="{'active': whichTab == 'about-tab'}">
                    <p>
                        md2html is a simple tool to convert your markdown file to pure html with some basic css style, you can use this simple tool with GitHub pages , you will find it very easy to build a static web site , Also we have prepared some basic css for you, of course if you know some css you can edit the style as you like.
                    </p> 
                        Jekyll is too heavy for me, and jekyll is base on Ruby , Ruby is not family to me , Also in some country for some reason like GFW you should have a vpn to access the RubyGems. 
                        
                        When you have more markdown file you will find Jekyll is slow , Becouse Jekyll rerender the whole markdown file everytime you build.
                    <p>
                        A simple md2html tool is enough for me . 
                    </p>

                    <p> enjoy! </p>

                    <p> by <a href="http://www.andyiac.com" target="_blank"> andyiac</a> </p>
                </div>
            </div>
        </div>

        <div class="preview-area">
            <div id="download-content" class="content" >
                <div class="markdown markdown-body github" v-html="htmlSource"></div>
            </div>
        </div>
    </div>
</template>

<script>

var marked = require('marked');
marked.setOptions({
    renderer: new marked.Renderer(),
    gfm: true,
    tables: true,
    breaks: true,
    pedantic: false,
    sanitize: false,
    smartLists: true,
    smartypants: false
});
import CodeMirror from '../codemirror/lib/codemirror.js'
import markdown from '../codemirror/mode/markdown/markdown.js'
import cssjs from '../codemirror/mode/css/css.js'
var gfmStyle = require('css-to-string-loader!css-loader!./doc-style/gfm.css');

export default{
    data(){
        return {
            docTitle:'',
            whichTab: 'md-tab',
            cssSource:'',
            markdownSource:'',
            htmlSource:'',
            editor: {},
            cssEditor:{},
            counter: 0,
        }
    },
    methods:{
        md2html(){

            this.htmlSource = marked(this.markdownSource)
            
            // this.counter += 1
            // console.log("=== marked ======>>" + this.counter);

            if(this.cssSource){
                var style = '<style>' + this.cssSource +'</style>'
                this.htmlSource = style + this.htmlSource
            }
        },
        download(){
            var elHtml = document.getElementById("download-content").innerHTML;
            var header = "<!doctype html>  <meta charset='utf-8'/> "
            var title = ''; 
            if(this.docTitle){
                title = "<title>" + this.docTitle + "</title>"
            }
            elHtml = header + title + elHtml
            var a = document.body.appendChild(
                document.createElement("a")
            );
            a.download = this.docTitle + ".html";
            // Grab the HTML
            a.href = "data:text/html;charset=utf-8," + encodeURIComponent(elHtml);
            // Trigger a click on the element
            a.click();
        },
        initCodeMirror(){
            var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
                mode: 'markdown',
                addModeClass: true,
                lineNumbers: true,
                autofocus: true,
                theme: "default",
                extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"}
            });
            return editor
        },
        initCssCodeMirror(){
            var editor = CodeMirror.fromTextArea(document.getElementById("css-code"), {
                mode: 'css',
                addModeClass: true,
                autofocus: true,
                lineNumbers: true,
                fixedGutter: true,
                extraKeys: {"Ctrl-Space": "autocomplete"}
            });
            editor.setGutterMarker("m2h-css-mode")
            return editor
        },
        saveContent(){
            this.editor.save()
            this.markdownSource = this.editor.getValue()
        },
        saveCssContent(){
            this.cssEditor.save()
            this.cssSource = this.cssEditor.getValue()
        }
    },
    watch:{
        markdownSource: 'md2html',
        cssSource: 'md2html'
    },
    mounted(){
       this.editor =  this.initCodeMirror()
       this.cssEditor = this.initCssCodeMirror()
       
       self = this
       this.editor.on("changes", function(){
            self.saveContent()
       })
       this.cssEditor.on("changes", function(){
            self.saveCssContent()
       })

       this.cssSource = gfmStyle
       this.cssEditor.setValue(this.cssSource)
       // console.log("gfmStyle======>>>" + gfmStyle);
    }
}
    
</script>

<style lang="sass">
@import url("../codemirror/lib/codemirror.css");
.edit-area{
    margin: 0;
    float: left;
    width: 40%;
    .title{
        padding: 20px 20px 0px;
    }
    .content{
        padding: 20px;
        .tab-title{
            margin-bottom: 10px;
            padding-bottom: 5px;
            border-bottom: 1px solid #ccc;
        }
    }
    .tab{
        display: none
    }
    .active{
        display: block;
    }
}
.preview-area{
    margin: 0;
    float: left;
    width: 59%;
    min-height: 800px;
    border-left: 1px solid #eee;
    .content{
        margin: 0 auto;
    }
}
button{
    padding: 4px;
    background: #fff;
    border: 1px solid #aaa;
    outline: none;
}
.active-btn{
    border: 1px solid #42b983;
    background: #42b983;
    color: #fff;
}

.CodeMirror {
    background: #f8f8f8; 
    border: 1px solid #eee;
    min-height: 60px;
    height: auto;
}
</style>