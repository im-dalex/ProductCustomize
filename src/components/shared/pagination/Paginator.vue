<template>
  <nav aria-label="Page Paginator">
    <ul class="pagination">
      <li class="page-item" :class="{ disabled: prevDisabled }">
        <a class="page-link cursor-pointer" @click="onPrevHandler">Previous</a>
      </li>
      <li class="page-item disabled">
        <span class="page-link">
          {{ currentPage }}
        </span>
      </li>
      <li class="page-item" :class="{ disabled: nextDisabled }">
        <a class="page-link cursor-pointer" @click="onNextHandler"> Next </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Paginator } from './paginator.interface';

export default defineComponent({
  name: 'Paginator',
  emits: ['page-changed', 'update:config'],
  props: {
    config: {
      type: Object as PropType<Paginator>,
      required: true,
    },
  },
  computed: {
    currentPage(): number {
      return this.config.toCount / this.config.pageSize;
    },
    nextDisabled(): boolean {
      return (
        this.config.nextDisabled || this.config.pageCount < this.config.pageSize
      );
    },
    prevDisabled(): boolean {
      return this.currentPage === 1;
    },
  },
  methods: {
    onPrevHandler(): void {
      const model = {
        ...this.config,
        fromCount: this.config.fromCount - this.config.pageSize - 1,
        toCount: this.config.toCount - this.config.pageSize,
      };
      this.updateModel(model);
    },
    onNextHandler(): void {
      const model = {
        ...this.config,
        fromCount: this.config.toCount + 1,
        toCount: this.config.toCount + this.config.pageSize,
      };
      this.updateModel(model);
    },
    updateModel(model: Paginator): void {
      this.$emit('update:config', model);
      this.$emit('page-changed');
    },
  },
});
</script>
