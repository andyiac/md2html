<template>
    <div id="home-wrap">
        <p class="title"> Trending Java Repos</p>
        <ul>
            <li class="repo-item" v-for="(repo, index) in repos">
                <repos-item :repo="repo" :index="index"></repos-item>
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
            }
        },
        data: function(){
            return {
                repos:[],
                page:1 
            }
        },
        created(){
            this.loadNextPage()
        }
    }
</script>

<style lang="stylus">
    #home-wrap
        margin 0 auto
        max-width 978px
        margin-top 20px
        .title
            margin 15px 0
            font-size 20px

    .repo-item
        list-style none 
        border 1px solid #eee
        border-top none
        background-color #fafafa
    .repo-item:nth-of-type(even) 
        background-color #fff
    .repo-item:first-child
        border-top 1px solid #eee
    .repo-item:last-child
        border-bottom 1px solid #eee
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
