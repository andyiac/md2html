<template>
    <div class="blog-detail">
        <div class="content markdown-body" v-html="blogContent"></div>
    </div>
</template>

<script>
import BlogAction from '../../js/repos.js'
import GithubMarkdown from './GithubMarkdown.vue'
export default {
    mixins: [GithubMarkdown],
    data: function(){
        return {
            blogId: '',
            blogContent: ''
        }
    },
    methods:{
        getBlogContent: function(){
            BlogAction.getBlogDetail(this, this.blogId, (blog)=>{
                this.blogContent = blog.content
                document.title = blog.title
                console.log(JSON.stringify(blog));
            })
        }
    },
    mounted () {
        var self = this
        setTimeout(function () {
        }, 1)
        self.blogId= self.$route.query.id
        this.getBlogContent()
    }

}
</script>

<style lang="stylus">
    .blog-detail
        .content
            min-height 400px
            margin 40px auto
            width 800px
</style>