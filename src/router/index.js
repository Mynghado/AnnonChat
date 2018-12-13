import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'

Vue.use(Router)

export default new Router({
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
        if(to.params.name) {
          // load the component we want next
          next()
        } else {
          next({name: 'Welcome' })
        }
      }
    }
  ]
})
