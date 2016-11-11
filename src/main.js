import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import Axios from 'axios'

import App from './components/App.vue'
import Home from './components/Home.vue'
import ReposItem from './components/repos/ReposItem.vue'
import About from './components/About.vue'

Vue.use(Router)
Vue.use(VueResource)


const router = new Router({
    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/repostest',
            component: ReposItem
        },
        {
            path: '/about',
            component: About
        }

    ]
})

const app = new Vue({router: router, render: h=>h(App)}).$mount('#app')