<template>
    <div id="timeline-wrap">
        <div class="content-wrap">
            <p class="title"> </p>
            <blog-item class="repo-item" v-for="(blog, index) in blogs" :repo="blog" :index="index"> 
            </blog-item>
        </div>
        <bottom-footer></bottom-footer>
    </div>
</template>

<script>
    import BlogItem from './BlogItem.vue'
    import BottomFooter from '../BottomFooter.vue'
    import ReposAction from '../../js/repos.js'

    export default{
        components: {
            BlogItem ,BottomFooter
        },
        methods:{
            loadNextPage: function(){
                ReposAction.getRepos(this,'java',this.page,(res)=>{
                    if(res.length > 0){
                        this.page += 1
                    }
                    for (var i=0;i<res.length; i++){
                        this.repos.push(res[i])
                    }
                })
            },
            listAllBlog: function(){
                ReposAction.getBlogList(this,(res)=>{
                    for( var i=0; i<res.length; i++){
                        this.blogs.push(res[i])
                    }
                })
            }
        },
        data: function(){
            return {
                repos:[],
                page:1,
                blogs:[]
            }
        },
        created(){
            this.listAllBlog()
        }
    }
</script>

<style lang="stylus">
    #timeline-wrap
        .content-wrap
            margin 0 auto
            max-width 620px
            padding 0 20px
            margin-bottom 60px
            .title
                margin 30px 0
                font-size 20px
</style>
