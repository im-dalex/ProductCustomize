<template>
  <the-header />
  <main class="page-content">
    <loading
      v-model:active="isLoading"
      loader="bars"
      color="#7762e2"
      :width="90"
      :height="90"
    />
    <router-view />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheHeader from '@/components/layout/TheHeader.vue';
import { mapState } from 'pinia';
import { useAppStore } from '@/modules/app/store';

import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default defineComponent({
  name: 'MainWrapper',
  components: { TheHeader, Loading },
  computed: {
    ...mapState(useAppStore, ['isLoading']),
  },
});
</script>
