<template>
    <div>
        <div id="header">
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

    #header
        .content
            max-width 600px
            line-height 120px
            margin auto
</style>