import { createRouter, createWebHistory } from "vue-router";
import Detail from '../page/Detail.vue'
import Search from '../page/Search.vue'

const routes = [
  {
    path: "/",
    name: "Search",
    component: Search,
    meta: {title: "BO Sample Search"},
  },
  {
    path: "/detail/:id",
    name: "Detail",
    component: Detail,
    props: true,
    meta: {title: "BO Sample Detail"},
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.afterEach((to) => {
  document.title = to.meta.title
    ? to.meta.title
    : "BO Sample"
})

export default router;
