<template>
    <div id="home-wrap">
        <p class="title"> Trending users from china</p>
        <ul>
            <li class="user-item" v-for="(user, index) in users">
                <user-item :user="user" :index="index"></user-item>
            </li>
        </ul>
        <div class="load-more">
            <div @click="loadNextPage"><span>load more</span></div> 
        </div>
    </div>
</template>

<script>
    import UserItem from './users/UserItem.vue'
    import UserAction from '../js/user.js'
    export default{
        components: {
            UserItem
        },
        methods:{
            loadNextPage: function(){
                UserAction.getUsers(this,'china','',this.page,(res)=>{
                    if(res.length > 0){
                        this.page += 1
                    }
                    for (var i=0;i<res.length; i++){
                        this.users.push(res[i])
                    }
                })
            }
        },
        data: function(){
            return {
                users:[],
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

    .user-item
        list-style none 
        border 1px solid #eee
        border-top none
        background-color #fafafa
    .user-item:nth-of-type(even) 
        background-color #fff
    .user-item:first-child
        border-top 1px solid #eee
    .user-item:last-child
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
