<template>
  <main-wrapper />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainWrapper from '@/views/Main.vue';

export default defineComponent({
  name: 'App',
  components: { MainWrapper },
});
</script>

<style lang="scss">
html,
body {
  height: 100%;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f2f2f2;
  display: flex;
  flex-flow: column;
  height: 100%;
}
</style>
