import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import '@fortawesome/fontawesome-free/js/all.js';

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

createApp(App).use(router).mount("#app");
