<template>
  <div class="product-list row row-cols-4 mx-0 g-4">
    <div v-for="product in products" :key="product.id" class="col">
      <product-card :product="product" @try-it="tryItHandler" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductCard from '@/views/product/components/ProductCard.vue';
import { getProducts as _getProducts } from '@/modules/product/product.service';
import { Product } from '@/modules/product/models/product.interface';

export default defineComponent({
  name: 'ProductList',
  components: { ProductCard },
  data: () => ({
    products: [] as Product[],
  }),
  async created() {
    await this.getProducts();
  },
  methods: {
    async getProducts(): Promise<void> {
      const data = await _getProducts(0, 8);
      this.products = [...data];
    },
    tryItHandler(productId: string): void {
      this.$router.push({
        name: 'ProductCustomization',
        params: { productId },
      });
    },
  },
});
</script>
