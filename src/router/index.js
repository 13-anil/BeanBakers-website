import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/BeanBakers.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'beanbakers',
    component: Home
  },
  {
    path: '/ohjelmistokonsultointi',
    name: 'ohjelmistokonsultointi',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "ohjelmistokonsultointi" */ '../views/Ohjelmistokonsultointi.vue')
  },
  {
    path: '/tutkimuspalvelut',
    name: 'tutkimuspalvelut',
    component: () =>
      import(/* webpackChunkName: "tutkimuspalvelut" */ '../views/Tutkimuspalvelut.vue')
  },
  {
    path: '/otayhteytta',
    name: 'otayhteytta',
    component: () =>
      import(/* webpackChunkName: "otayhteytta" */ '../views/OtaYhteytta.vue')
  },
  {
    path: '*',
    name: 'notfound',
    component: () =>
     import(/* webpackChunkName: "notfound" */ '../components/NotFound.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;