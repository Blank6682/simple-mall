import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./style/base.css"
import "./style/iconfont.css"

createApp(App).use(store).use(router).mount('#app')
