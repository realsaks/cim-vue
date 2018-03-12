import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import ListPending from '@/pages/ListPending'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/pending/:status?',
      name: 'Pending',
      component: ListPending
    }
  ]
})
