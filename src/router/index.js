import Vue from 'vue'
import VueRouter from 'vue-router'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirce:'/detail'
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    path:'/home',
    component:()=>import('../views/Home.vue')
  },
  {
    path:'/goods',
    component:()=>import('../views/Goods.vue')
  },
  {
    path:'/user',
    component:()=>import('../views/User.vue')
  },
  {
    path:'/order',
    component:()=>import('../views/Order.vue')
  },
  {
    path:'/free',
    component:()=>import('../views/Free.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
