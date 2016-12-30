<template>
    <div>
        <div id="header">
            <div class="content">
                <div class="logo">
                    <a href="/">42GATE</a>
                </div>
                <div class="menu">
                    <!-- <router-link to="/repos"> Repos</router-link>  -->
                    <router-link to="/about"> About </router-link> 
                </div>
            </div>
        </div>
        <router-view class="view"> </router-view>
    </div>

</template>

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
            max-width 978px
            line-height 90px
            margin auto
            .logo
                float left
                letter-spacing 1px
                a
                    text-decoration none 
            .menu
                float right
                line-height 90px
                a
                    margin-left 20px
                    text-decoration none

</style>