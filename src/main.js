import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap-icons/font/bootstrap-icons.css'
import '@/assets/all.scss'

const app = createApp(App)
app.use(router).mount('#app')
