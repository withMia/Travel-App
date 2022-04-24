import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/Home.vue')
  },
  {
    path: '/city',
    name: 'City',
    component: () => import('@/views/city/City.vue')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/views/detail/Detail.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
