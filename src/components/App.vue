<template>
    <div>
        <div id="header">
            <div class="content">
                <div class="logo">
                    <a href="/" class="name">xxx</a>
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
        height 120px
        .content
            max-width 600px
            line-height 120px
            margin auto
            .logo
                letter-spacing 3px
                .name
                    display block
                    margin 0 auto
                    text-align center
                    font-size 18px
                    color #444
                a
                    text-decoration none    
</style>