import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 浏览器统一样式
import 'styles/reset.css'
// 解决1像素边框的问题
import 'styles/border.css'
// 移动端click事件延迟问题
import 'styles/iconfont.css'
import 'babel-polyfill'

createApp(App).use(store).use(router).mount('#app')
