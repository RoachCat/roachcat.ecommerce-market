import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Index.vue";
import ProductDetail from "../views/ProductDetail/Index.vue"
import Category from "../views/Category/Index.vue"
import About from "../views/About/Index.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/product-detail/:id",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/category/:id",
    name: "Category",
    component: Category,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
