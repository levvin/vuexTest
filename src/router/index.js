import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import News from '../components/news'
import Artic from '../components/artic'

import Statistics from '../pages/statistics'

import Sys from '../pages/sys'
import Role from '../pages/sys/role'
import Manager from '../pages/sys/manager'

import Data from '../pages/data'
import Student from '../pages/data/student'
import Teacher from '../pages/data/teacher'

import House from '../pages/house'
import Check from '../pages/check'
import Device from '../pages/device'
import Recode from '../pages/recode'

import Fault from '../pages/fault'
import Info from '../pages/fault/info'
import Woker from '../pages/fault/woker'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'statistics',
      component:Statistics
    },
    {
      path: '/home',
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
    },
    {
      path:'/data',
      name:'data',
      component:Data,
      children:[
        {
           path:'student',
           name:'student',
           component: Student
        },
        {
         path:'teacher',
         name:'teacher',
         component: Teacher
        }
      ]
    },
    {
      path:'/house',
      name:'house',
      component:House,
    },
    {
      path:'/check',
      name:'check',
      component:Check,
    },
    {
      path:'/device',
      name:'device',
      component: Device
    },
    {
      path:'/recode',
      name:'recode',
      component: Recode
    },
    {
      path:'/fault',
      name:'fault',
      component:Fault,
      children:[
        {
           path:'info',
           name:'info',
           component: Info
        },
        {
         path:'woker',
         name:'woker',
         component: Woker
        }
      ]
    },
  ]
})
