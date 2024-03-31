import { createWebHistory, createRouter } from "vue-router";

// Import components that would be related to the routes
import Home from './components/Home.vue'
import Products from './components/Products.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/products',
    component: Products
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
