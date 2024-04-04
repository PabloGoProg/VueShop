import { createApp } from 'vue'
import router from './router'
import './style.css'
import './index.css'
import App from './App.vue'

const createCartInMemory = () => {
  const shoppingCart = localStorage.getItem('shoppingCart');
  if(!shoppingCart) {
    localStorage.setItem('shoppingCart', JSON.stringify([]))
  }
  return;
}

createCartInMemory();

createApp(App)
  .use(router)
  .mount('#app')
