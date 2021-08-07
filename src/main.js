/* eslint-disable eol-last */
/* eslint-disable indent */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 导入字体图标

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')