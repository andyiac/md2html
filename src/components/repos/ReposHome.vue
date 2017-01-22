<template>
    <div id="timeline-wrap">
        <div class="content-wrap">
            <p class="title"> </p>
            <ul>
                <li class="repo-item" v-for="(blog, index) in blogs">
                    <repos-item :repo="blog" :index="index"></repos-item>
                </li>
            </ul>
        </div>
        <bottom-footer></bottom-footer>
    </div>
</template>

<script>
    import ReposItem from './ReposItem.vue'
    import BottomFooter from '../BottomFooter.vue'
    import ReposAction from '../../js/repos.js'

    export default{
        components: {
            ReposItem ,BottomFooter
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
            padding 0 10px
            margin-top 20px
            margin-bottom 60px
            .title
                margin 30px 0
                font-size 20px
    .repo-item
        list-style none 
</style>
