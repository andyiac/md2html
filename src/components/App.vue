<template>
    <div>
        <div id="header">
            <div class="content">
                <div class="logo">
                    <div class="name">42GATE</div>
                </div>
                <div class="menu">
                    <router-link class="nav" :class="{'nav-active': menu.home}" to="/blog/homepage">Home</router-link> 
                    <router-link class="nav" :class="{'nav-active': menu.timeline}" to="/timeline">TimeLine</router-link> 
                    <router-link class="nav" :class="{'nav-active': menu.about}" to="/blog/about">About</router-link> 
                </div>
            </div>
        </div>
        <router-view class="view"></router-view>
    </div>

</template>

<script>
export default{
    data: function(){
        return{
            menu: {
                home: false ,
                timeline: false,
                about: false
            }
        }
    },
    watch: {
        '$route':'routeChange'
    },
    methods:{
        routeChange: function(route){
            var path = route.path
            this.menu.home = false 
            this.menu.timeline = false  
            this.menu.about = false  
            if(path == '/blog/homepage'){
                this.menu.home = true
            } else if(path == '/timeline'){
                this.menu.timeline = true
            } else if(path == '/about'){
                this.menu.about = true
            }
        }
    }
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
                .name
                    color #666
                a
                    text-decoration none 
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