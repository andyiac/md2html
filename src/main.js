import Vue from 'vue'
import Router from 'vue-router'

import App from './components/App.vue'
import Home from './components/Home.vue'


Vue.use(Router)

const router = new Router({


    mode: 'history',
    base: __dirname,
    routes: [
        {
            path: '/',
            component: Home
        }
    ]
})

const app = new Vue({router: router, render: h=>h(App)}).$mount('#app')