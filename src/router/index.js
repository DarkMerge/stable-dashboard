import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from '@/components/dashboard/Dashboard.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
    },
    {
      path: '/dashboard',
      component: Dashboard,
    },
    /*{ name: 'post', path: '/post/:id', component: PostView },
     { name: 'page', path: '/page/:id', component: PageView }*/
  ],
});
