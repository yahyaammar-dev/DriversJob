import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from "./store/index.js";
import router from './routes/index';
import "bootstrap/dist/css/bootstrap.min.css";


library.add(fas);


createApp(App)
    .component("fa", FontAwesomeIcon)
    .use(router)
    .use(store)
    .mount("#app");



import "bootstrap/dist/js/bootstrap.js";