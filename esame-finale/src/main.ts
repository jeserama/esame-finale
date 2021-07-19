import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/js/all.min.js";


import 'jquery/src/jquery.js';
import 'popper.js/dist/popper.js';


import navbar from "./components/navbar.vue";
import myfooter from "./components/footer.vue";
import banner from"./components/banner.vue";
const app = createApp(App);

app
.use(store)
.use(router)
.component("navbar", navbar)
.component("myfooter",myfooter)
.component("banner",banner)
.mount('#app')
