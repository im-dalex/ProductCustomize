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
