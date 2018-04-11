import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Products from '@/components/Products'
import Map from '@/components/Map'
import Profile from '@/components/Profile'

import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/products',
      name: 'Products',
      component: Products
    },
    {
      path: '/map',
      name: 'Map',
      component: Map
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    }
  ]
})
