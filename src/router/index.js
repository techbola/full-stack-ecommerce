import * as VueRouter from "vue-router";

import ProductsPage from "../pages/ProductsPage.vue";
import ShoppingCartPage from "../pages/ShoppingCartPage.vue";
import ProductDetailPage from "../pages/ProductDetailPage.vue";
import NotFoundPage from "../pages/NotFoundPage.vue";

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/products",
    },
    {
      path: "/products",
      component: ProductsPage,
    },
    {
      path: "/products/:productId",
      component: ShoppingCartPage,
    },
    {
      path: "/cart",
      component: ProductDetailPage,
    },
    {
      path: "/:pathMatch(.*)*",
      component: NotFoundPage,
    },
  ],
});

export default router;
