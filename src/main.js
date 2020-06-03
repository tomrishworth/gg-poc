import Vue from 'vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';
import App from './App.vue';
import VueNouislider from 'vue-nouislider';

Vue.config.productionTip = false;

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueNouislider);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
