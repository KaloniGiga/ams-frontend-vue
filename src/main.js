import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import useAuthStore from './stores/auth'

const app = createApp(App)

app.use(createPinia())

useAuthStore()
  .validateUser()
  .then(() => {
  app.use(router).mount('#app')
})
