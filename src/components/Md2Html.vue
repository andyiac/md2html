<template>
    <div id="md-2-html">
        <div class="edit-area">
            <div class="title">
                title
            </div>
            <div class="content">
                <div class="tab-title">
                    <button @click="whichTab = 'md-tab'">markdown</button>
                    <button @click="whichTab = 'css-tab'">css</button>
                    <button @click="whichTab = 'config-tab'">config</button>
                </div>

                <div class="md-tab tab" :class="{'active': whichTab == 'md-tab'}">
                    <textarea id="code" name="code" v-model="markdownSource" placeholder="markdown source"></textarea>
                </div>
                <div class="css-tab tab" :class="{'active': whichTab == 'css-tab'}">
                    <textarea v-model="cssSource" placeholder="css source"></textarea>
                </div>
                <div class="config-tab tab" :class="{'active': whichTab == 'config-tab'}"></div>
                <button @click="download()">Download</button>
            </div>
        </div>

        <div class="preview-area">
            <div id="download-content" class="content" >
                <div class="markdown markdown-body github" v-html="htmlSource"></div>
            </div>
        </div>
        <iframe frameborder="0"> </iframe>
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

export default{
    data(){
        return {
            whichTab: 'md-tab',
            cssSource:'',
            markdownSource:'',
            htmlSource:'',
            editor: {},
            counter: 0
        }
    },
    methods:{
        md2html(){

            this.htmlSource = marked(this.markdownSource)
            
            this.counter += 1
            console.log("=== marked ======>>" + this.counter);

            if(this.cssSource){
                var style = '<style>' + this.cssSource +'</style>'
                this.htmlSource = style + this.htmlSource
            }
        },
        download(){
            var elHtml = document.getElementById("download-content").innerHTML;
            var a = document.body.appendChild(
                document.createElement("a")
            );
            a.download = "export.html";
            // Grab the HTML
            a.href = "data:text/html;charset=utf-8," + encodeURIComponent(elHtml);
            // Trigger a click on the element
            a.click();
        },
        initCodeMirror(){
            var editor = CodeMirror.fromTextArea(document.getElementById("code"), {
                mode: 'markdown',
                lineNumbers: true,
                theme: "default",
                extraKeys: {"Enter": "newlineAndIndentContinueMarkdownList"}
            });
            return editor
        },
        saveContent(){
            this.editor.save()
            this.markdownSource = this.editor.getValue();
        }
    },
    watch:{
        markdownSource: 'md2html',
        cssSource: 'md2html'
    },
    mounted(){
       this.editor =  this.initCodeMirror()
       self = this
       this.editor.on("changes", function(){
            self.saveContent()
       })
    }
}
    
</script>

<style lang="sass">
@import url("../codemirror/lib/codemirror.css");
.edit-area{
    margin: 0;
    float: left;
    min-height: 800px;
    width: 40%;
    background: #ccc; 
    .title{
        padding: 20px 20px 0px;
    }
    .content{
        padding: 20px;
        .tab-title{
            padding-bottom: 10px;

        }
    }
    .md-tab{
        display: none;
    }
    .css-tab{
        display: none;
    }
    .config-tab{
        display: none;
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
}
.CodeMirror {border-top: 1px solid black; border-bottom: 1px solid black;}
.cm-s-default .cm-trailing-space-a:before,
.cm-s-default .cm-trailing-space-b:before {position: absolute; content: "\00B7"; color: #777;}
.cm-s-default .cm-trailing-space-new-line:before {position: absolute; content: "\21B5"; color: #777;}
</style>