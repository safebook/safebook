import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from 'pinia'
import router from "./router";
import Markdown from 'vue3-markdown-it';
import './index.css'

const app = createApp(App);
const pinia = createPinia()

app.use(router);
app.use(pinia);
app.use(Markdown);

app.mount("#app");
