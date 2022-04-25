import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'babel-polyfill'

createApp(App).use(store).use(router).mount('#app')
