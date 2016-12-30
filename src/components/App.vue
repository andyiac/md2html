<template>
    <div>
        <div id="header">
            <div class="content">
                <div class="logo">
                    <div>42GATE</div>
                </div>
                <div class="menu">
                    <router-link class="nav" to="/home">Home</router-link> 
                    <router-link class="nav" to="/timeline">TimeLine</router-link> 
                    <router-link class="nav" to="/about">About</router-link> 
                </div>
            </div>
        </div>
        <router-view class="view"></router-view>
    </div>

</template>

<script>
export default{


}
</script>

<style lang="stylus">
    *
        margin 0
        padding 0
    * 
        font-family -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
    #header
        height 90px
        background-color #f5f5f5
        border-bottom 1px solid #eee
        .content
            max-width 820px
            line-height 90px
            padding 0 10px
            margin auto
            .logo
                float left
                letter-spacing 1px
                a
                    text-decoration none 
            .menu
                float right
                line-height 90px
                .nav
                    margin-left 20px
                    text-decoration none
                    color #9e9e9e
                    padding-bottom 4px
                .nav:hover
                    color #42b983
                    border-bottom 3px solid #42b983
</style>