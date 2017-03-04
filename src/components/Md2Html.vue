<template>
    <div id="md-2-html">
        <div class="edit-area">

            <div class="md-tab">
                <textarea v-model="markdownSource" placeholder="html source"></textarea>
            </div>

            <div class="css-tab">
                <textarea v-model="cssSource" placeholder="css source"></textarea>
            </div>
            <div class="config-tab">
                
            </div>
            <button @click="download()">Download</button>
        </div>

        <div class="preview-area">
            <div id="download-content" >
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

export default{
    data(){
        return {
            cssSource:'',
            markdownSource: '',
            htmlSource:''
        }
    },
    methods:{
        md2html(){

            this.htmlSource = marked(this.markdownSource)
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
        }
    },
    watch:{
        markdownSource: 'md2html',
        cssSource: 'md2html'
    }
}
    
</script>

<style lang="sass">
.edit-area{
    margin: 0;
    float: left;
    min-height: 800px;
    width: 40%;
    background: #ccc; 
    .md-tab{
        background: #ggg;
    }
    .css-tab{

    }
    .config-tab{

    }
    
}
.preview-area{
    margin: 0;
    float: left;
    width: 60%;
    min-height: 800px;
    background: #eee;
}
</style>