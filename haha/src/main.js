import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes"
import store from './store/store'
import './assets/index.css'
import axios from 'axios'



createApp(App).use(router).use(store).mount('#app')
