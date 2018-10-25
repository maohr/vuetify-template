import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
    },
    {
      path: '/dataList',
      name: 'dataList',
      component: () => import(/* webpackChunkName: "data" */ '@/views/data/dataList.vue')
    }
  ]
})
