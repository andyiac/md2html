<template>
    <div id="repo-wrap">
        <div class="item">
            <div class="content"> 
                <a class="name" :href="'/#/blog-detail/?id=' + repo.id"  target="_blank"> {{ repo.title }} </a>
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
            // http://localhost:9090/api/get_blog/?id=20
            current_url: "/api/get_blog/?id=" + this.repo.id
        }
    }
}
</script>

<style lang="stylus">

#repo-wrap
    width 100%
    height 74px 
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
        .name
            font-size 17px
            text-align left
            float left
            white-space nowrap
            padding-bottom 1px
            text-overflow ellipsis
            border-bottom 1px solid #9c6 
            overflow hidden
            height 100%
            color #555459
        .name:hover
            color #9c6
        .time
            padding-top 8px
            font-size 15px
            clear left
            color rgba(0,0,0,0.3)
            font-style italic
        .desc 
            margin-left 10px
            line-height 60px
            width 600px
            float left 
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
    a 
        text-decoration none
        display block
        color #9e9ea6
</style>

