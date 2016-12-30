<template>
    <div id="home-wrap">
        <p class="title">blogs </p>
        <ul>
            <li class="repo-item" v-for="(blog, index) in blogs">
                <repos-item :repo="blog" :index="index"></repos-item>
            </li>
        </ul>
        <div class="load-more">
            <div @click="loadNextPage"><span>load more</span></div> 
        </div>
    </div>
</template>

<script>
    import ReposItem from './ReposItem.vue'
    import ReposAction from '../../js/repos.js'
    export default{
        components: {
            ReposItem 
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
    #home-wrap
        margin 0 auto
        max-width 800px
        margin-top 20px
        .title
            margin 30px 0
            font-size 20px
    .repo-item
        list-style none 
    .load-more
        width 160px
        cursor pointer
        height 40px
        text-align center
        margin 20px auto   
        border-radius 4px 
        border 1px solid #eee
        span
            cursor pointer
            height 40px
            line-height 40px
    
</style>
