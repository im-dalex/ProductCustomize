<template>
  <button
    type="button"
    class="btn btn-primary w-100 rounded-0"
    @click="goToProducts"
  >
    Go to Product List
  </button>
</template>

<script lang="ts">
export default {
  name: 'Home',
  methods: {
    goToProducts(): void {
      this.$router.push({ name: 'ProductList' });
    },
  },
};
</script>
