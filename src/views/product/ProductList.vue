<template>
  <div class="product-list row row-cols-md-4 mx-0 g-4">
    <div v-for="(product, idx) in products" :key="product.id" class="col">
      <product-card :product="product" @try-it="tryItHandler($event, idx)" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapWritableState } from 'pinia';
import { useProductStore } from '@/modules/product/store';
import { Product } from '@/modules/product/models/product.interface';
import { getProducts as _getProducts } from '@/modules/product/product.service';
import ProductCard from '@/views/product/components/ProductCard.vue';

export default defineComponent({
  name: 'ProductList',
  components: { ProductCard },
  data: () => ({
    products: [] as Product[],
  }),
  computed: {
    ...mapWritableState(useProductStore, ['selectedProduct']),
  },
  async created() {
    await this.getProducts();
  },
  methods: {
    async getProducts(): Promise<void> {
      const data = await _getProducts(0, 8);
      this.products = [...data];
    },
    tryItHandler(productId: string, productIdx: number): void {
      const product = this.products[productIdx];
      this.selectedProduct = {
        id: productId,
        name: product.name,
        createdDate: product.createdDate.toString(),
      };

      this.$router.push({
        name: 'ProductCustomization',
        params: { productId },
      });
    },
  },
});
</script>
