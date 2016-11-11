<template>
    <div>
        <div id="header">
            <div class="content">
                <div class="logo">
                    <a href="/">GitHot</a>
                </div>
            </div>
        </div>
        <div class="menu">
            <router-link to="/"> hot user</router-link> 
            <router-link to="/repostest"> repostest </router-link> 
            <router-link to="/about"> about </router-link> 
        </div>
        <router-view
            class="view"
            >
        </router-view>
    </div>

</template>

<style lang="stylus">
    *
        margin 0
        padding 0
    #header
        background-color: #f5f5f5
        border-bottom: 1px solid #eee
        .content
            max-width 978px
            margin  auto
            padding 30px 0 
            .logo
                letter-spacing 1px
                a
                    text-decoration none 

</style>