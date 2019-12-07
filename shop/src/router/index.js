import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category';
import Cart from '../views/Cart';
import Profile from '../views/Profile';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },{
    path:'/category',
    name:'category',
    component:Category
  },{
    path:'/cart',
    name:'cart',
    component:Cart
  },{
    path:'/profile',
    name:'profile',
    component:Profile
  },
]

const router = new VueRouter({
  routes
})

export default router
