import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home/Home.vue'
import City from '../views/city/City.vue'
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
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
