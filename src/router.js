import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/module',
      name: 'Module',
      component: () => import('@/views/Module')
    },
    {
      path: '/singleton',
      name: 'Singleton',
      component: () => import('@/views/Singleton')
    },
    {
      path: '/strategy',
      name: 'Strategy',
      component: () => import('@/views/Strategy')
    },
    {
      path: '/observer',
      name: 'Observer',
      component: () => import('@/views/Observer')
    },
    {
      path: '/decorator',
      name: 'Decorator',
      component: () => import('@/views/Decorator')
    }
  ]
})
