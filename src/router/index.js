import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Index.vue";
import ProductDetail from "../views/ProductDetail/Index.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/product-detail/:id",
    name: "ProductDetail",
    component: ProductDetail,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
