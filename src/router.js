import { createWebHistory, createRouter } from "vue-router";

// Import components that would be related to the routes
import Home from './views/Home.vue'
import Products from './views/Products.vue'
import ShoppingCart from './views/ShoppingCart.vue'
import Settings from './views/Settings.vue'
import Buys from './views/Buys.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/productos',
    component: Products
  },
  {
    path: '/carrito',
    component: ShoppingCart
  },
  {
    path: '/mis-compras',
    component: Buys
  },
  {
    path: '/opciones',
    component: Settings
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router;
