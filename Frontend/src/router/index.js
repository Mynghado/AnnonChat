import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import List from '@/components/List'
import Chat from '@/components/Chat'
import Create from '@/components/Create'
import Signup from '@/components/auth/Signup'
import Login from '@/components/auth/Login'

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
      path: '/list',
      name: 'List',
      component: List
      /*props : true,
      // TO the component, FROM it come from, where we go NEXT
      beforeEnter: (to, from, next) => {
        // if it's a valid props (props 'name' exists)
        if (to.params.name) {
          // load the component we want next
          next()
        } else {
          next({name: 'Welcome' })
        }
      }*/
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'Login',
      compoennt: Login
    }
  ]
})
