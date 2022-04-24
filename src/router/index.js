import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import City from '../views/city/City.vue'
import Detail from '../views/detail/Detail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
