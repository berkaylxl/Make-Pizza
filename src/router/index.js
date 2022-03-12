import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path:"/create-pizza",
    alias:"/",
    component:()=>import('../views/CreatePizza.vue')
  },
  {
    path:"/basket",
    component:()=> import ('../views/Basket.vue'),
    name:"basket"
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
