<template>
    <div id="repo-wrap">
        <router-link class="name" :to="current_url">{{ repo.title }}</router-link>
        <div class="time"> {{repo.time }}</div>
    </div>
</template>

<script>
export default{
    props:['repo'],
    data:function(){
        return{
            current_url: '/blog/' + this.repo.title
        }
    }
}
</script>

<style lang="stylus">

#repo-wrap
    clear left
    width 100%
    border-bottom 1px solid #e6e6e6
    .name
        padding 30px 0
        font-size 17px
        text-align left
        float left
        width 70%
        color #555459
    .name:hover
        color #42b983
    .time
        padding 30px 0
        font-size 14px
        width 30%
        text-align right
        float right 
        color rgba(0,0,0,0.3)
    a 
        text-decoration none
        display block
        color #9e9ea6
</style>

