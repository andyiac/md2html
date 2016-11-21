<template>
    <div id="repo-wrap">
        <div class="item">
            <a  class="content" :href=repo.html_url  target="_blank"> 
                <div class="avatar"> avatar </div>
                <div class="name"> {{ repo.name }} </div>
                <div class="desc"> {{ repo.description }}</div>
            </a>
        </div>
        
    </div>
</template>

<style lang="stylus">

#repo-wrap
    width 100%
    height 100px 
    .item
        position relative
        padding-left 20px
    .item a:before , .item a:after
        border 10px solid transparent
        border-left 10px solid #fff
        width 0
        height 0
        position absolute
        top 70%
        right 20px
        content ' '
    .item a:before
        border-left-color #9e9ea6
        right 18px
    .item .content
        .avatar
            line-height 100px
            float left
            width 80px
            background grey
        .name
            text-align left
            float left
            width 120px
            height 100%
            margin-left 20px
        .desc 
            margin-left 20px
            float left
            max-width 600px

    a 
        text-decoration none
        display block


    
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