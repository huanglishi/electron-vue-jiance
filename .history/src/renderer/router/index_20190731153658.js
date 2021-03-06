import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'workplace',
      component: require('@/views/workplace/Index').default,
      meta: {
        isHeader:true,
        isFooterr:true,
      },
    },
    {
      path: '/user',
      name: 'user',
      component: require('@/views/user/Index').default,
      meta: {
        isHeader:true,
        isFooterr:true,
      },
    },
    {
      path: '/network',
      name: 'network',
      component: require('@/views/network/Index').default,
      meta: {
        isHeader:true,
        isFooterr:true,
      },
    },
    {
      path: '/packagdata',
      name: 'packagdata',
      component: require('@/views/packagdata/Index').default,
      meta: {
        isHeader:true,
        isFooterr:true,
      },
    },
    {
      path: '/template',
      name: 'template',
      component: require('@/views/template/Index').default,
      meta: {
        isHeader:true,
        isFooterr:true,
      },
    },
    {
      path: '/help',
      name: 'help',
      component: require('@/views/help/Index').default,
      meta: {
        isHeader:true,
        isFooterr:true,
      },
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
