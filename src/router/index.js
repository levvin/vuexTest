import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home'
import News from '../pages/news'
import Artic from '../pages/artic'
import Sys from '../pages/sys'
import Role from '../pages/sys/role'
import Manager from '../pages/sys/manager'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/news',
      name: 'news',
      component: News
    },
    {
      path:'/artic',
      name:'artic',
      component: Artic
    },
    {
      path:'/sys',
      name:'sys',
      component:Sys,
      children:[
        {
           path:'role',
           name:'role',
           component: Role
        },
        {
         path:'manager',
         name:'manager',
         component: Manager
        }
      ]
    }
  ]
})
