import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import '../node_modules/bootstrap/dist/css/bootstrap.css' 
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

//Persistance du store
import piniaPersist from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()

//Lier la persistance du store
pinia.use(piniaPersist)
app.use(pinia)
app.use(router)

app.mount('#app')
