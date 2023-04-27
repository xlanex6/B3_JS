import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Index from './pages/index.vue'
import Kayak from './pages/kayak.vue'
import Boxe from './pages/boxe.vue'
import Machin from './pages/machin.vue'

const routes = [
  { path: '/', component: Index },
  { path: '/kayak', component: Kayak },
  { path: '/boxe', component: Boxe },
  { path: '/machin', component: Machin },
]

const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
})

const viteApp = createApp(App)
  
viteApp.use(router)
  
viteApp.mount('#app')
