import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home/Home.vue'
import Move1 from '../views/Home/Move1.vue'
import Move2 from '../views/Home/Move2.vue'
import Detail from '../views/Home/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    name: 'home',
    component: Home,
    children: [
      {
        path: 'move1',
        component: Move1
      },
      {
        path: 'move2',
        component: Move2
      },
      {
        path: '',
        redirect: '/index/move1'
      }
    ]
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About/About.vue')
  },
  {
    path: '*',
    redirect: '/index/move1'
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 路由拦截器
// router.beforeEach((to, from, next) => {
//   if (to.path === '/about') {
//     // 权限检查
//     console.log(1)
//     // 跳转
//     next('/index')
//   } else {
//     next()
//   }
// })

export default router
