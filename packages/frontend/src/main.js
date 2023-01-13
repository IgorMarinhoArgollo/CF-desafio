import { createApp } from "vue";
import App from './App.vue'
import router from './router/router'

const app = createApp(App);

app.mount("#app");
createApp(App).use(router).mount('#app')