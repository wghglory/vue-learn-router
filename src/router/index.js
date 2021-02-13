import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import StudentList from '../views/StudentList.vue';
import Student from '../views/Student.vue';
import NotFound from '../views/NotFound.vue';
import NamedRoute from '../views/NamedRoute.vue';

import Dashboard from '@/views/Dashboard.vue';
import LevelDetail from '@/views/LevelDetail.vue';
import SecretDetail from '@/views/SecretDetail.vue';

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
    // component: Home,
    components: {
      default: Home,
      'named-route': NamedRoute,
    },
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
        beforeEnter(to, from, next) {
          console.log('----beforeEnter-----');
          next();
        },
        // add custom data
        meta: {
          isRequired: true,
          customData: 'I can pass anything here. Use this.$route to find it',
        },
      },
    ],
  },

  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
  {
    path: '/levels/:levelId',
    name: 'LevelDetail',
    component: LevelDetail,
    props: true,
    children: [
      {
        path: ':secret',
        name: 'secretDetail',
        component: SecretDetail,
        props: true,
        meta: {
          detail: '不要告诉别人',
        },
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

// global route interceptor
router.beforeEach((to, from, next) => {
  // next(false);
  next();
  // next(new Error("test error"));
});

router.afterEach((to, from) => {
  // console.log(to);
  // console.log(from);
});

router.onError((err) => {
  console.log(err);
});

export default router;
