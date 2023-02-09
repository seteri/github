import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes"
import store from './store/store'
import './assets/index.css'



createApp(App).use(router).use(store).mount('#app')
