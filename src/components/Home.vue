<template>
    <div id="home-wrap">
        <p class="title"> Trending users from china</p>
        <ul>
            <li class="user-item" v-for="user in users">
                <user-item :user="user"></user-item>
            </li>
        </ul>
    </div>
</template>


<style lang="stylus">
    #home-wrap
        margin 0 auto
        max-width 978px
        margin-top 20px
</style>


<script>
    import UserItem from './users/UserItem.vue'
    import UserAction from '../js/user.js'
    export default{
        data: function(){
            return {
                users:[]
            }
        },
        components: {
            UserItem
        },
        created(){
            UserAction.getTrendingUsers(this,(res)=>{
                console.log("------get---"+ JSON.stringify(res))
                for (var i=0;i<res.length; i++){
                    this.users.push(res[i])
                }
            })
        }
    }
</script>

<style lang="stylus">
    .user-item
        list-style none 
        border 1px solid #eee;
        border-top none
        background-color #fafafa

    .user-item:nth-of-type(even) 
        background-color #fff
    

    
</style>
