import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Index.vue";
import ProductDetail from "../views/ProductDetail/Index.vue";
import Category from "../views/Category/Index.vue";
import About from "../views/About/Index.vue";
import ProductsSought from "../views/ProductsSought/ProductsSought";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Ecommerce",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "Ecommerce - Acerca de",
    },
  },
  {
    path: "/category/:id",
    name: "Category",
    component: Category,
    meta: {
      title: "",
    },
  },
  {
    path: "/search/:value",
    name: "ProductsSought",
    component: ProductsSought,
  },
  {
    path: "/product-detail/:id",
    name: "ProductDetail",
    component: ProductDetail,
    meta: {
      title: "",
    },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
