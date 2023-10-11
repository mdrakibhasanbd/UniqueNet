import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import Carousel3d from 'vue-carousel-3d';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(Carousel3d)
// app.use(SwiperCore.use([Virtual]));

app.mount('#app')
