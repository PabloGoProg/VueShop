import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'

// comentario

createApp(App)
  .use(router)
  .mount('#app')
