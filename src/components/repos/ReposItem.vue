<template>
    <div id="repo-wrap">
        <div class="item"><a :href=repo.html_url  target="_blank"> {{ this.linkName }}</a></div>
    </div>
</template>

<style lang="stylus">

#repo-wrap
    width 100%
    height 60px 
    .item
        line-height 60px
        padding-left 20px
    
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