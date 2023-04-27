
import Index from './pages/index.vue'
import Kayak from './pages/kayak.vue'
// import Boxe from './pages/boxe.vue'
import Machin from './pages/machin.vue'
import Contact from './pages/contact.vue'
import SportIndex from './pages/products/index.vue'
import singleProduct from './pages/products/singleProduct.vue'

const routes = [
  { path: '/', component: Index ,navbarVisible: true , displayName: 'Home'},
  { path: '/products', component: SportIndex ,navbarVisible: true , displayName: 'Products'},
  { path: '/products/:productId', component: singleProduct, navbarVisible: false, displayName: 'SingleSport'},
  // { path: '/kayak', component: Kayak ,navbarVisible: true , displayName: 'Kayak'},
  // { path: '/boxe', component: Boxe ,navbarVisible: true , displayName: 'Boxe'},
  { path: '/machin', component: Machin ,navbarVisible: true , displayName: 'Machin'},
  { path: '/contact', component: Contact ,navbarVisible: false , displayName: 'Contact'},
]

export { routes }
