import UserList from '../views/UserList.vue'
import About from '../views/AboutPage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import UserDetails from '../views/UserDetails.vue'

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/user/:id',
    name: 'UserDetails',
    props: true,
    component: UserDetails
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
