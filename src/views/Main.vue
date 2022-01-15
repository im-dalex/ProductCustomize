<template>
  <the-header />
  <main class="page-content">
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component" />
      </transition>
    </router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import TheHeader from '@/components/layout/TheHeader.vue';

export default defineComponent({
  name: 'MainWrapper',
  components: { TheHeader },
});
</script>

<style lang="scss" scoped>
.page-content {
  margin: 100px;
  flex: 1 1 auto;

  .route-enter-from {
    opacity: 0;
    transform: translateY(-30px);
  }

  .route-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  .route-enter-active {
    transition: all 0.3s ease-out;
  }

  .route-leave-active {
    transition: all 0.3s ease-in;
  }

  .route-enter-to,
  .route-leave-from {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
