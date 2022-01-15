import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    meta: { authorization: true },
    component: () => import('@/views/Main.vue'),
    children: [
      {
        path: '',
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
