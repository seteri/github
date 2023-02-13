import { createApp } from 'vue'
import App from './App.vue'
import router from "./routes"
import store from './store/store'
import './assets/index.css'
import myPlugin from "./myPlugin"


createApp(App).use(myPlugin).use(router).use(store).mount('#app')
