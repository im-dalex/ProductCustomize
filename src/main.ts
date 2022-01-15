// App
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Store
import { createPinia } from 'pinia';

// Plugins
import '@/plugins/customily.setup';

// Libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

createApp(App).use(createPinia()).use(router).mount('#app');
