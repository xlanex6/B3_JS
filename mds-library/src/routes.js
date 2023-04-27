
import Index from './pages/index.vue'
import Kayak from './pages/kayak.vue'
import Boxe from './pages/boxe.vue'
import Machin from './pages/machin.vue'
import Contact from './pages/contact.vue'

const routes = [
  { path: '/', component: Index ,navbarVisible: true , displayName: 'Home'},
  { path: '/kayak', component: Kayak ,navbarVisible: true , displayName: 'Kayak'},
  { path: '/boxe', component: Boxe ,navbarVisible: true , displayName: 'Boxe'},
  { path: '/machin', component: Machin ,navbarVisible: true , displayName: 'Machin'},
  { path: '/contact', component: Contact ,navbarVisible: false , displayName: 'Contact'},
]

export { routes }
