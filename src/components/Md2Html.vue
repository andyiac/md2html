<template>
    <div id="md-2-html">
        
        <textarea cols="80" rows="10" v-model="markdownSource"></textarea>
        
        <div v-html="htmlSource"></div>
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
            markdownSource: '',
            htmlSource:''
        }
    },
    methods:{
        md2html(){
            this.htmlSource = marked(this.markdownSource)
        }
    },
    watch:{
        markdownSource: 'md2html'
    }
}
    
</script>

<style>
    
</style>