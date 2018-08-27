// Import the views for the routes.
import Home from '@views/Home.vue'

// Define the routes.
export default [
  {
    path: '/',
    name: 'home',
    title: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    title: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './../views/About.vue'),
  },
]
