import Vue from 'vue';
import VueResource from 'vue-resource';
import router from './router';
// import Vuex from 'vuex';
import App from './App';

// Vue.use(Vuex);
Vue.use(VueResource);

// kusok js let a = 0
Vue.config.productionTip = false;

const app = new Vue({
  router,
  render: h => h(App),
}).$mount('#app');

if (new Date() === 0) {
  app.toString();
}
