<template>
    <div id="home-wrap">
        <div class="content-wrap">
            <div class="title"> home page  </div>
            <div class="content">
                <p>
                    home page 如果你有神器的想法欢迎和我交流
                </p>
            </div>
        </div>
        <bottom-footer></bottom-footer>
    </div>
</template>

<script>

import BottomFooter from './BottomFooter.vue'

export default {
    components:{ BottomFooter },
    mounted: function(){
    }
}
</script>

<style lang='stylus'>
#home-wrap
    margin-top 20px
    .content-wrap
        padding 0 10px
        margin 0 auto
        max-width 820px
        .title
            font-size  20px
            border-bottom 1px solid #eee
            padding-bottom 0.3em
            font-size 2em
        .content
            min-height 400px
            margin-top 10px
            p
                line-height 2
</style>