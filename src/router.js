/* eslint-disable no-unused-vars */
/* eslint-disable eol-last */
/* eslint-disable indent */
import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'

Vue.use(Router)
const router = new Router({
    routes: [
        { path: '/login', component: Login },
        { path: '/', redirect: '/login' },
        { path: '/home', component: Home }

    ]
})

router.beforeEach((to, from, next) => {
    if (to.path === '/login') return next()

    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) return next('/login')
    next()
})

export default router