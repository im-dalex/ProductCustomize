import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    meta: { authorization: true },
    component: () => import('@/views/Main.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
      {
        path: 'product-list',
        name: 'ProductList',
        component: () => import('@/views/product/ProductList.vue'),
      },
      {
        path: 'product/:productId',
        name: 'ProductCustomization',
        props: true,
        component: () => import('@/views/product/ProductCustomization.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
];

export default routes;
