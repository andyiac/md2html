<template>
   <div id="user-item-wrap">
        <img class="avatar" :src=avatarUrl >
        <p class="name">{{ user.login }} </p>
   </div> 
</template>


<script>
    export default {
        props: ['user'],
        data: function(){
            return {
                avatarUrl:""
            }
        },
        created:function(){
            this.avatarUrl = "https://avatars2.githubusercontent.com/u/"+ this.user.id+ "?s=140"
        }
    }
</script>

<style lang="stylus">
    * 
        margin 0
        padding 0
    #user-item-wrap
        margin 1px
        padding 10px 0
        height 60px
        width 100%
        line-height 60px
        .avatar 
            clear left 
            display block
            width 56px
            height 56px
            float left 
            margin-left 10px
            border-radius 50%
            border 2px solid grey
            overflow hidden
        .name 
            margin-left 20px
            display block
            display inline-block
    
</style>
