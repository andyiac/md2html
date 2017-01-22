<template>
    <div id="repo-wrap">
        <div class="item">
            <div class="content"> 
                <router-link class="name" :to="current_url">{{ repo.title }}</router-link>
                <div class="time"> {{repo.time }}</div>
            </div>
        </div>
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
    width 100%
    border-bottom 1px solid #ccc
    .item
        position relative
    .item a:before , .item a:after
        border 8px solid transparent
        border-left 8px solid #fff
        width 0
        height 0
        position absolute
        top 20px 
        right 20px
    .item a:before
        border-left-color #9e9ea6
        right 18px
    .item .content
        padding 30px 0
        .name
            font-size 17px
            text-align left
            float left
            padding-bottom 1px
            text-overflow ellipsis
            overflow hidden
            height 100%
            color #555459
        .name:hover
            color #42b983
            border-bottom 1px solid #42b983 
        .time
            height 100%
            font-size 14px
            float right 
            color rgba(0,0,0,0.3)
            font-style italic
    a 
        text-decoration none
        display block
        color #9e9ea6
</style>

