/* eslint-disable eol-last */
/* eslint-disable indent */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'
// 导入字体图标
import './assets/fonts/iconfont.css'
import TreeTable from 'vue-table-with-tree-grid'

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
axios.interceptors.request.use(config => {
    config.headers.Authorization = window.sessionStorage.getItem('token')
    return config
})
Vue.config.productionTip = false

Vue.component('tree-table', TreeTable)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')