import Vue from 'vue'
import VueRouter from 'vue-router'
import { isLogined } from "@/utils/tools";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/SingerDetail',
    name: 'SingerDetail',
    component: () => import('../views/SingerDetail.vue')
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('../views/Video.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue'),
    meta: {
      needLogin: true,
    },
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/Ranklist',
    name: 'Ranklist',
    component: () => import('../views/Ranklist.vue')
  },
  {
    path: '/Collect',
    name: 'Collect',
    component: () => import('../views/Collect.vue')
  }, {
    path: '/recommendmusicdetail',
    name: 'RecommendMusicDetail',
    component: () => import('../views/RecommendMusicDetail.vue')
  },
  {
    path: '/persongdetail',
    name: 'PerSongDetail',
    component: () => import('../views/PerSongDetail.vue')
  },
  {
    path: '/changepersoninf',
    name: 'ChangePersonInf',
    component: () => import('../views/ChangePersonInf.vue')
  },
  {
    path: '/changepassword',
    name: 'ChangePassword',
    component: () => import('../views/ChangePassword.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/login_reg',
    name: 'Login_reg',
    component: () => import('../views/Login_reg.vue')
  },
  {
    path: '/security_code',
    name: 'Security_code',
    component: () => import('../views/Security_code.vue')
  },
  {
    path: '/new_scode',
    name: 'New_SCode',
    component: () => import('../views/New_SCode.vue')
  },
  {
    path: '*',
    name: '404',
    component: 404
  },
]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.needLogin) {
    if (isLogined()) {
      next();
    } else {
      next({
        name: "Login",
      });
    }
  } else {
    next();
  }
});
export default router
