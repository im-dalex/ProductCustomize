<template>
  <div class="product-list row row-cols-1 row-cols-md-2 row-cols-lg-4 mx-0 g-4">
    <div v-for="(product, idx) in products" :key="product.id" class="col">
      <product-card :product="product" @try-it="tryItHandler($event, idx)" />
    </div>
  </div>
  <mq-responsive>
    <template #md->
      <infinite-scroll
        v-model:config="pagination"
        @bottom-reached="getProducts"
      />
    </template>
    <template #lg+>
      <pagination
        v-if="products.length"
        class="d-flex justify-content-center mt-4"
        v-model:config="pagination"
        @page-changed="getProducts"
      />
    </template>
  </mq-responsive>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapWritableState } from 'pinia';
import { MqResponsive } from 'vue3-mq';
import { useProductStore } from '@/modules/product/store';
import { Product } from '@/modules/product/models/product.interface';
import { getProducts as _getProducts } from '@/modules/product/product.service';
import ProductCard from '@/views/product/components/ProductCard.vue';
import Pagination from '@/components/shared/pagination/Paginator.vue';
import { Paginator } from '@/components/shared/pagination/paginator.interface';
import InfiniteScroll from '@/components/shared/pagination/InfiniteScroll.vue';
import { formatDate } from '@/plugins/filters';

const DEFAULT_PAGE_SIZE = 8;

export default defineComponent({
  name: 'ProductList',
  components: { MqResponsive, ProductCard, Pagination, InfiniteScroll },
  inject: ['mq'],
  data: () => ({
    products: [] as Product[],
    pagination: {
      pageSize: DEFAULT_PAGE_SIZE,
      toItem: DEFAULT_PAGE_SIZE,
      pageCount: 0,
      fromItem: 0,
    } as Paginator,
  }),
  computed: {
    ...mapWritableState(useProductStore, ['selectedProduct']),
  },
  watch: {
    'mq.lgPlus'(newVal, oldVal) {
      if (newVal != oldVal) {
        this.resetPagination();
        this.getProducts();
      }
    },
  },
  async created() {
    await this.getProducts();
  },
  methods: {
    async getProducts(): Promise<void> {
      const data = await _getProducts(
        this.pagination.fromItem,
        this.pagination.toItem
      );
      this.pagination.nextDisabled = data.length == 0;
      this.pagination.pageCount = data.length;
      if (!this.pagination.nextDisabled) {
        this.products = this.mq.lgPlus
          ? [...data]
          : [...this.products, ...data];
      }
    },
    tryItHandler(productId: string, productIdx: number): void {
      const product = this.products[productIdx];
      this.selectedProduct = {
        id: productId,
        name: product.name,
        createdDate: formatDate(product.createdDate),
      };

      this.$router.push({
        name: 'ProductCustomization',
        params: { productId },
      });
    },
    resetPagination() {
      this.products = [];
      this.pagination = {
        pageSize: DEFAULT_PAGE_SIZE,
        toItem: DEFAULT_PAGE_SIZE,
        pageCount: 0,
        fromItem: 0,
      };
    },
  },
});
</script>
