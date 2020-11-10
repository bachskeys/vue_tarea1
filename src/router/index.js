import Vue from 'vue'
import VueRouter from 'vue-router'
import Facts from '../views/Facts.vue'
import About from '../views/About.vue'
import Random from '../views/RandomFact.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Fact',
    component: Facts
  },
 {
    path:'/about',
    name:"About",
    component:About
  },
  {
    path:'/random',
    name:"random",
    component:Random
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
