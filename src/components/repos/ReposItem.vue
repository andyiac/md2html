<template>
    <div id="repo-wrap">
        <div class="item">
            <a  class="content" :href=repo.html_url  target="_blank"> 
                <div class="avatar"> </div>
                <div class="name"> {{ repo.name }} </div>
                <div class="desc"> {{ repo.description }}</div>
            </a>
        </div>
        
    </div>
</template>

<style lang="stylus">

#repo-wrap
    width 100%
    height 60px 
    .item
        position relative
        padding-left 10px
    .item a:before , .item a:after
        border 8px solid transparent
        border-left 8px solid #fff
        width 0
        height 0
        position absolute
        top 20px 
        right 20px
        content ' '
    .item a:before
        border-left-color #9e9ea6
        right 18px
    .item .content
        .avatar
            line-height 60px
            float left
            width 80px
        .name
            text-align left
            float left
            line-height 60px
            max-width 280px
            white-space nowrap
            text-overflow ellipsis
            overflow hidden
            height 100%
            color #555459
            margin-left 10px
            font-weight 700
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