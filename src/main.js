import { createApp } from 'vue'
import './style.css'
//import app
import App from './App.vue'

//import router
import router from '../public/routes/router'

createApp(App).use(router).mount('#app')