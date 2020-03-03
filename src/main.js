import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import vueScrollto from 'vue-scrollto'
import Vue from 'vue';
import App from './App.vue';
import router from './router';
//import PageSection from "./components/PageSection.vue";


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(vueScrollto);
//Vue.component('page-section', PageSection);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');