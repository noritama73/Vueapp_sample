import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './Home'
import About from './About'

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/About', name: 'about', component: About},
    ]
})

export default router