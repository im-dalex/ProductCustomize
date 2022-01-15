<template>
  <div class="card card-wrapper">
    <img
      class="card-img-top"
      :src="product.imagePath"
      :alt="product.name"
      loading="lazy"
    />
    <div class="card-body">
      <span class="product-name">{{ product.name }}</span>
      <span class="date">{{ createdDate }}</span>
    </div>
    <div class="card-footer">
      <button
        type="button"
        class="btn btn-primary w-100 rounded-0"
        @click="tryIt"
      >
        Try it
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Product } from '@/modules/product/models/product.interface';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ProductList',
  emits: ['try-it'],
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  computed: {
    createdDate(): string {
      const date = new Date(this.product?.createdDate);
      return date.toLocaleDateString('en-GB');
    },
  },
  methods: {
    tryIt(): void {
      this.$emit('try-it', this.product.importedFrom);
    },
  },
});
</script>

<style lang="scss" scoped>
.card-wrapper {
  height: 100%;
  .card-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #d7d7d7;
    .product-name {
      font-size: 16px;
      font-weight: bold;
      color: #000000;
    }
    .date {
      font-size: 14px;
      color: #686767;
    }
  }
  .card-footer {
    padding: 0;
  }
}
</style>
