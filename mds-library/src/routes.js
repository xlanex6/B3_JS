
import Index from './pages/index.vue'
import Kayak from './pages/kayak.vue'
// import Boxe from './pages/boxe.vue'
import Machin from './pages/machin.vue'
import Contact from './pages/contact.vue'
import SportIndex from './pages/sports/index.vue'
import SingleSport from './pages/sports/singleSport.vue'

const routes = [
  { path: '/', component: Index ,navbarVisible: true , displayName: 'Home'},
  { path: '/sports', component: SportIndex ,navbarVisible: true , displayName: 'Sports'},
  { path: '/sports/:slug', component: SingleSport, navbarVisible: false, displayName: 'SingleSport'},
  // { path: '/kayak', component: Kayak ,navbarVisible: true , displayName: 'Kayak'},
  // { path: '/boxe', component: Boxe ,navbarVisible: true , displayName: 'Boxe'},
  { path: '/machin', component: Machin ,navbarVisible: true , displayName: 'Machin'},
  { path: '/contact', component: Contact ,navbarVisible: false , displayName: 'Contact'},
]

export { routes }
