import Vue from 'vue'
import VueRouter from 'vue-router'

import home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/order',
    name: 'order',
    component: () => import('../views/order.vue')
   },
   {
     path: '/search',
     name: 'search',
     component: () => import('../views/search.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/user.vue')
     }
]

const router = new VueRouter({
  routes
})

export default router
