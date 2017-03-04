import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Axios from 'axios'

import App from './components/App.vue'
import About from './components/About.vue'

import Md2Html from './components/Md2Html.vue'

Vue.use(Router)
Vue.use(VueResource)


const router = new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: Md2Html
        },{
            path: '/about',
            component: About
        }

    ]
})

const app = new Vue({router: router, render: h=>h(App)}).$mount('#app')
