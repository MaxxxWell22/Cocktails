import './assets/styles/main.sass';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

const pinia = createPinia()
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
