import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import MainLayout from '@/layout/MainLayout.vue'
import BaseRoute from '@/layout/base/BaseRoute.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/dashboard',
    component: MainLayout,
    children:[
      {
        path:'home',
        component: HomeView
      },
      {
        path:'alumnos',
        component: BaseRoute,
        children:[
          {
            path:'',
            component:()=>import('@/views/alumnos/AlumnosList.vue')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
