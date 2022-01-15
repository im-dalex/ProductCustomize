import { defineStore } from 'pinia';
import { ProductState } from '@/modules/product/models/product.interface';

export const useProductStore = defineStore('product', {
  persist: true,
  state: () => ({
    selectedProduct: {} as ProductState,
  }),
});
