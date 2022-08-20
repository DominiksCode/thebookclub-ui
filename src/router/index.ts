import UserList from '../views/UserList.vue'
import About from '../views/AboutPage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import UserDetails from '../views/UserDetails.vue'
import SessionList from '../views/SessionList.vue'
import SessionDetails from '../views/SessionDetails.vue'

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
    path: '/sessions',
    name: 'SessionList',
    component: SessionList
  },
  {
    path: '/sessions/:id',
    name: 'SessionDetails',
    props: true,
    component: SessionDetails
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
