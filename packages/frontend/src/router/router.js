import { createRouter, createWebHistory } from "vue-router";
import MainContent from '../views/MainContent.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'MainContent',
    component: MainContent
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter(
  {
    history: createWebHistory(),
    routes
  }
)

export default router;