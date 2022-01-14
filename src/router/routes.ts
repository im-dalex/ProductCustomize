import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/products",
    name: "ProductList",
    component: () =>
      import(
        /* webpackChunkName: "products" */ "@/views/product/ProductList.vue"
      ),
    children: [
      {
        path: ":productId",
        name: "ProductCustomization",
        component: () =>
          import(
            /* webpackChunkName: "products" */ "@/views/product/ProductCustomization.vue"
          ),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/products",
  },
];

export default routes;
