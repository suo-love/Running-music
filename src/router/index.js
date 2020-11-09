import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'relogin',
    component: () => import('../views/relogin.vue')
  },
  {
    path: '/relogin',
    name: 'relogin',
    component: () => import('../views/relogin.vue')
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import('../views/Video.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('../views/User.vue')
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
  },{
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
    path: '*',
    name: '404',
    component: 404
  },
]

const router = new VueRouter({
  routes
})

export default router
