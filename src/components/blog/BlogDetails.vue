<template>
    <div class="blog-detail">
        <div class="content">
            <div class="markdown-body" v-html="blogContent"></div>
            <div class="content-footer">
                <br>
            </div>
        </div>

        <footer class="footer">
            
        </footer>
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
            min-height 600px
            margin 40px auto
            width 800px
            .content-footer
                margin-top 40px
                height 80px
                border-top 1px solid #eee
        .footer
            background #f5f5f5
            width 100%
            height 200px
</style>