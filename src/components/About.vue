<template>
    <div id="about-wrap">
        <div class="content-wrap">
            <div class="title"> 关于 </div>
            <div class="content">
                <p>
                    GitHot is an project that will help you find world most popular project and person . <br>
                    
                    你也可能对 <a href="http://github.com/andyiac/githot">GitHot  </a> Android 开源项目感兴趣 . <br>

                    或许还可能对 coderyi同学的 iOS GitHub 开源客户端  <a href="https://github.com/coderyi/monkey">Monkey</a> 感兴趣 .<br>

                    关于 GitHot 如果你有一些神奇的想法，欢迎和我交流 :-D ，在下微信 andyiac (添加请注明 githot 交流) <br>
                </p>
            </div>
        </div>
        <bottom-footer></bottom-footer>
    </div>
</template>

<script>
import BottomFooter from './BottomFooter.vue'

export default {
    components:{ BottomFooter }
}
</script>

<style lang='stylus'>
    #about-wrap
        margin-top 20px
        .content-wrap
            margin 0 auto
            min-height 700px
            width 800px    
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