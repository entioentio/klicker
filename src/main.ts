import { createApp } from "vue";
import { createPinia } from "pinia";
import { VueFire } from "vuefire";
import { firebaseApp } from "./firebase";

import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(VueFire, firebaseApp);
app.use(router);

app.mount("#app");
