<template>
    <div class="blog-detail">
        <div class="content">
            <div class="markdown-body" v-html="blogContent"></div>
            <div class="content-footer">
                <br>
            </div>
        </div>
        <bottom-footer></bottom-footer>
    </div>
</template>

<script>
import BlogAction from '../../js/repos.js'
import GithubMarkdown from './GithubMarkdown.vue'
import BottomFooter from '../BottomFooter.vue'

export default {
    components:{BottomFooter},
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
                // console.log(JSON.stringify(blog));
            })
        },
        
        getBlogContentByTitle: function(){
            BlogAction.getBlogDetailByTitle(this, this.title_name, (blog)=>{
                this.blogContent = blog.content
                document.title = blog.title
                // console.log(JSON.stringify(blog));
            })
        },

    },
    mounted () {
        var self = this
        self.title_name = self.$route.params.title_name
        this.getBlogContentByTitle()
    }

}
</script>

<style lang="stylus">
    .blog-detail
        .content
            min-height 600px
            margin 40px auto
            max-width 600px
            padding 0 10px
            .content-footer
                margin-top 40px
                height 80px
                border-top 1px solid #eee
      
</style>