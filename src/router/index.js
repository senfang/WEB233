import Vue from 'vue'
import Router from 'vue-router'
import top from '@/components/top'
import main from '@/components/main'
import footer from '@/components/footer'
import login from '@/components/login'
import regist from '@/components/regist'
import invest from '@/components/invest'
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
        main: login,
        footer: footer
      }
    },
    {
      path: '/regist',
      name: 'regist',
      components: {
        default: top,
        main: regist,
        footer: footer
      }
    },
    {
      path: '/invest',
      name: 'invest',
      components: {
        default: top,
        main: invest
      }
    }
  ]
})
