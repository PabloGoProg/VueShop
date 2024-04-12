import { createApp } from 'vue'
import router from './router'
import './style.css'
import './index.css'
import App from './App.vue'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { FcShop } from "oh-vue-icons/icons";

addIcons({
  FcShop,
})

const createCartInMemory = () => {
  const shoppingCart = localStorage.getItem('shoppingCart');
  const buysList = localStorage.getItem('buys');
  const productList = localStorage.getItem('avaliableProducts');
  if(!shoppingCart) {
    localStorage.setItem('shoppingCart', JSON.stringify([]))
  }
  if(!buysList) {
    localStorage.setItem('buys', JSON.stringify([]))
  } 
  if(!productList) {
    localStorage.setItem('avaliableProducts', JSON.stringify([]))
  }
  return;
}

createCartInMemory();

createApp(App)
  .component("v-icon", OhVueIcon)
  .use(router)
  .mount('#app')
