import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import VueMask from 'v-mask'
Vue.use(VueMask);

import './scss/style.scss';
import store from './store';
import router from './router';

import MySwitch from "@/components/MySwitch";

Vue.component('MySwitch', MySwitch);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
