import { createApp } from 'vue'
import App from './App.vue'
import Gallery from './Gallery.vue'
import Login from './Login.vue'
import Detail from './Detail.vue'
//get style
import style from './style.css'

createApp(App).mount('#app')
createApp(Gallery).mount('#gallery')
createApp(Login).mount('#login')
createApp(Detail).mount('#detail')
