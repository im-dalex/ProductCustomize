<template>
  <nav aria-label="Page Paginator">
    <ul class="pagination">
      <li
        class="page-item"
        data-test="prevBtn"
        :class="{ disabled: prevDisabled }"
      >
        <a class="page-link cursor-pointer" @click="onPrevHandler">Previous</a>
      </li>
      <li data-test="pageNumber" class="page-item disabled">
        <span class="page-link">
          {{ currentPage }}
        </span>
      </li>
      <li
        class="page-item"
        data-test="nextBtn"
        :class="{ disabled: nextDisabled }"
      >
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
      return this.config.toItem / this.config.pageSize;
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
      const model: Paginator = {
        ...this.config,
        fromItem: this.config.fromItem - this.config.pageSize - 1,
        toItem: this.config.toItem - this.config.pageSize,
      };
      this.updateModel(model);
    },
    onNextHandler(): void {
      const model: Paginator = {
        ...this.config,
        fromItem: this.config.toItem + 1,
        toItem: this.config.toItem + this.config.pageSize,
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
