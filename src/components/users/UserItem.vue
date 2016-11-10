<template>
   <div id="user-item-wrap">
        <img class="avatar" :src=avatarUrl >
        <p class="name">{{ user.login }} </p>
        <p class="rank"> {{ index }}</p>
   </div> 
</template>


<script>
    export default {
        props: ['user','index'],
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
        padding 10px 0
        height 60px
        width 100%
        line-height 60px
        .avatar 
            display block
            float left 
            width 56px
            height 56px
            margin-left 20px
            border-radius 50%
            border 2px solid grey
        .name 
            display bolck
            float left
            margin-left 20px
            width 160px
        .rank
            margin-left 20px
            display block
            float left
    
</style>
