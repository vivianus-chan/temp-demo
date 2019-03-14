import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'

document.addEventListener('DOMContentLoaded', function () {
  if (window.FastClick) window.FastClick.attach(document.body)
}, false)

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base: '/',
  routes: [
    {
      path: '/',
      name: 'HelloWorld1',
      component: HelloWorld,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld2',
      component: HelloWorld,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/test',
      name: 'test',
      component: test,
      meta: {
        title: '哈哈'
      }
    }
  ]
})
