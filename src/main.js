import './assets/main.css'
import router from './router'
import { createApp } from 'vue'
import App from './App.vue'
import store from './state'

// npm run dev
const app = createApp(App);
app.use(router);
app.use(store)
app.mount('#app');
