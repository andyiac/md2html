<template>
    <div id="md-2-html">
        <div class="left-area">
            <textarea cols="70" rows="10" v-model="cssSource" placeholder="css source"></textarea>
            <textarea cols="70" rows="10" v-model="markdownSource" placeholder="html source"></textarea>
            
        </div>
        <div class="right-area">
            <div class="markdown markdown-body github" v-bind:style="cssSource" v-html="htmlSource"></div>
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
    breaks: false,
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
                this.htmlSource += style
            }
        }
    },
    watch:{
        markdownSource: 'md2html'
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