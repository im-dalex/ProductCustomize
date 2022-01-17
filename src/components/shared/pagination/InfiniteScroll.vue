<template>
  <div />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Paginator } from './paginator.interface';

export default defineComponent({
  name: 'InfiniteScroll',
  emits: ['bottom-reached', 'update:config'],
  props: {
    config: {
      type: Object as PropType<Paginator>,
      required: true,
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScrollToBottom);
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScrollToBottom);
  },
  methods: {
    handleScrollToBottom(): void {
      const targetBottom = document.body.scrollHeight;
      const currentPosition = window.scrollY + window.innerHeight;
      if (
        currentPosition < targetBottom ||
        this.config.nextDisabled ||
        this.config.pageCount === 0
      )
        return;

      const model = {
        ...this.config,
        fromItem: this.config.toItem + 1,
        toItem: this.config.toItem + this.config.pageSize,
      };

      this.updateConfig(model);
    },
    updateConfig(model: Paginator): void {
      this.$emit('update:config', model);
      this.$emit('bottom-reached');
    },
  },
});
</script>
