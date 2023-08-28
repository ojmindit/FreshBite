import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: HomeView
    // },
    // {
    //   path: '/menu',
    //   name: 'menu',
    //   component: () => import('../views/MenuView.vue')
    // },
    // {
    //   path: '/howitworks',
    //   name: 'howitworks',
    //   component: () => import('../views/HowItWorks.vue')
    // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // },
    // {
    //   path: '/contactus',
    //   name: 'contactus',
    //   component: () => import('../views/ContactUs.vue')
    // },
    // {
    //   path: '/cart',
    //   name: 'cart',
    //   component: () => import('../views/CartView.vue')
    // },
    // {
    //   path: '/signin',
    //   name: 'signin',
    //   component: () => import('../views/SignInPage.vue')
    // },
  ]
})

export default router
