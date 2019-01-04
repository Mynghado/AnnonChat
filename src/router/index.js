import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Home from '@/components/Home'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
  mode: 'history', // to remove the ugly '/#/' from the URL
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props : true,
      // TO the component, FROM it come from, where we go NEXT
      beforeEnter: (to, from, next) => {
        // if it's a valid props (props 'name' exists)
        if (to.params.name) {
          // load the component we want next
          next()
        } else {
          next({name: 'Welcome' })
        }
      }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      props : true,
      // TO the component, FROM it come from, where we go NEXT
      beforeEnter: (to, from, next) => {
        // if it's a valid props (props 'name' exists)
        if (to.params.name) {
          // load the component we want next
          next()
        } else {
          next({name: 'Welcome' })
        }
      }
    }
  ]
})
