<template>
  <div class="card card-wrapper">
    <img
      class="card-img-top"
      :src="product.imagePath"
      :alt="product.name"
      loading="lazy"
    />
    <div class="card-body">
      <span class="fw-bold">{{ product.name }}</span>
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
import { formatDate } from '@/plugins/filters';
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
    createdDate() {
      return formatDate(this.product.createdDate);
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
    .date {
      font-size: 0.875rem;
      color: #686767;
    }
  }
  .card-footer {
    padding: 0;
  }
}
</style>
