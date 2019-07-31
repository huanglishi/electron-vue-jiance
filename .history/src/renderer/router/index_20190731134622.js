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
      path: '/template',
      name: 'template',
      component: require('@/views/template/Index').default,
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
