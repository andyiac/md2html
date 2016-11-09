<template>
    <div id="home-wrap">
        <p>Home</p>
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
        components: {
            UserItem
        },
        created(){
            UserAction.getTrendingUsers(this,(res)=>{
                console.log("------get---"+ JSON.stringify(res));
            })
        }
    }
</script>
