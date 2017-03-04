<template>
    <div id="md-2-html">
        <div class="left-area">
            <textarea cols="70" rows="10" v-model="cssSource" placeholder="css source"></textarea>
            <textarea cols="70" rows="10" v-model="markdownSource" placeholder="html source"></textarea>
            <button @click="download()">Download</button>
        </div>
        
        <div class="right-area">
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

<style lang="stylus">
.left-area{
    background: #ccc; 
}
.right-area{
    padding: 20px;
}
</style>