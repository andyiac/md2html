<template>
    <div id="repo-wrap">
        <div class="avatar"> <a href=""><img src="" alt=""></a></div>
        <div class="item"><a :href=repo.html_url  target="_blank"> {{ this.linkName }}</a></div>
    </div>
</template>

<style lang="stylus">

#repo-wrap
    width 100%
    height 60px 
    .item
        line-height 60px
        position relative
        padding-left 20px
    .item a:before , .item a:after
        border 8px solid transparent
        border-left 8px solid #fff
        width 0
        height 0
        position absolute
        top 35%
        right 20px
        content ' '
    .item a:before
        border-left-color #9e9ea6
        right 18px
    a 
        text-decoration none

    
</style>

<script>
export default{
    props:['repo'],
    data:function(){
        return{
            linkName: this.repo.html_url.substring(19,this.repo.html_url.length)
        }
    }
}
</script>