<template>
  <the-header />
  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import TheHeader from "@/components/layout/TheHeader.vue";

export default defineComponent({
  name: "MainWrapper",
  components: { TheHeader },
});
</script>

<style></style>
