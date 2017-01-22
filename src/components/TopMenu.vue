<template>
    <div class="menu">
        <router-link class="nav" :class="{'nav-active': menu.home}" to="/blog/homepage">Home</router-link> 
        <router-link class="nav" :class="{'nav-active': menu.timeline}" to="/timeline">TimeLine</router-link> 
        <router-link class="nav" :class="{'nav-active': menu.about}" to="/blog/about">About</router-link> 
    </div>
</template>


<style lang="stylus">
    .menu
        float right
        line-height 90px
        .nav
            margin-left 30px
            text-decoration none
            color #666
            padding-bottom 4px
        .nav:hover
            color #666
            border-bottom 3px solid #42b983
        .nav-active 
            border-bottom 3px solid #42b983
</style>