import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import StudentList from '../views/StudentList.vue';
import Student from '../views/Student.vue';
import NotFound from '../views/NotFound.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    redirect: '/',
  },
  {
    path: '/',
    alias: ['/index'],
    name: 'Home',
    component: Home,
  },
  {
    path: '/students',
    name: 'StudentList',
    component: StudentList,
    children: [
      {
        path: ':id',
        props: true,
        name: 'StudentDetail',
        component: Student,
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '*',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
