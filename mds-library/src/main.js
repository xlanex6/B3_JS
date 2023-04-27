import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

const viteApp = createApp(App)
  
viteApp.use(router)
  
viteApp.mount('#app')
