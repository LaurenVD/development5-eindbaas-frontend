import { createApp } from 'vue'
import './style.css'
//import app
import App from './App.vue'

//import router
import router from '../routes/routes.js'

createApp(App).use(router).mount('#app')