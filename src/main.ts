// App
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// Plugins
import '@/plugins/customily.setup';
import { Vue3Mq } from 'vue3-mq';
import '@/plugins/injections.setup';

// Libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// App styles
import '@/assets/scss/styles.scss';

createApp(App).use(store).use(router).use(Vue3Mq).mount('#app');
