import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Categories from '@/components/Categories'
import Products from '@/components/Products'
import Map from '@/components/Map'
import Profile from '@/components/Profile'
import Coupons from '@/components/Coupons'

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
      path: '/categories',
      name: 'Categories',
      component: Categories
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
    },
    {
      path: '/coupons',
      name: 'Coupons',
      component: Coupons
    }
  ]
})
