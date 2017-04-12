import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import main from '@/components/main'
import footer from '@/components/footer'
import login from '@/components/login'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        default: top,
        main: main,
        footer: footer
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: top,
        main: login
      }
    }
  ]
})
