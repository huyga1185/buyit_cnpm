import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapVue3 from 'bootstrap-vue-3';

const app = createApp(App);

// Sử dụng BootstrapVue3
app.use(BootstrapVue3);
app.use(router);

app.mount('#app');
