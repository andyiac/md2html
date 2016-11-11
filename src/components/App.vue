<template>
    <div>
        <div id="header">
            <div class="content">
                <div class="logo">
                    <a href="/">GitHot</a>
                </div>

                <div class="menu">
                    <!--<router-link to="/repostest"> Repos</router-link> -->
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
                    text-decoration none

</style>