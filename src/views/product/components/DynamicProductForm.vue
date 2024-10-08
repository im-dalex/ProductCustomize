<template>
  <div class="dynamic-form">
    <div
      class="field-wrapper mb-5"
      v-for="(field, idx) in fields"
      :key="`field-${idx}`"
    >
      <template v-if="field.type == fieldType.font">
        <div class="input-wrapper mb-3">
          <label :for="`input-${idx}`" class="form-label">
            Line {{ idx + 1 }}
          </label>
          <input
            :id="`input-${idx}`"
            class="form-control"
            type="text"
            placeholder="Ex: Your Name"
            @input="inputEmitter($event.target.value, field.id)"
          />
        </div>
        <div class="select-wrapper">
          <label class="form-label">Line {{ idx + 1 }} Font</label>
          <select
            class="form-select"
            aria-label="Font Selector"
            :value="initialFont(field)"
            @change="fontEmitter($event.target.value, field.id)"
          >
            <option
              v-for="(option, index) in field.fontList"
              :key="`font-${option.id}-${index}`"
              :value="option.id"
            >
              {{ option.label }}
            </option>
          </select>
        </div>
      </template>
      <template v-else-if="field.type == fieldType.image">
        <div class="select-wrapper">
          <label class="form-label">Image Option {{ idx + 1 }}</label>
          <select
            class="form-select"
            aria-label="Font Selector"
            @change="imgEmitter($event.target.value, field.id)"
          >
            <option
              v-for="(option, index) in field.imgOptions"
              :key="`img-${option}-${index}`"
              :value="option"
            >
              Option {{ index + 1 }}
            </option>
          </select>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import {
  FieldType,
  FieldUpdate,
  ProductField,
} from '@/modules/product/models/product.interface';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'DynamicProductForm',
  emits: ['text-change', 'font-change', 'img-change'],
  props: {
    fields: {
      type: Array as PropType<Array<ProductField[]>>,
      required: true,
    },
  },
  computed: {
    initialFont() {
      return (field: ProductField) => {
        const font = field.fontList?.find((f) => f.value === field.currentFont);
        return font?.id;
      };
    },
    fieldType() {
      return FieldType;
    },
  },
  methods: {
    inputEmitter(text: string, inputId: number): void {
      const params: FieldUpdate = {
        fieldId: inputId,
        value: text,
      };
      this.$emit('text-change', params);
    },
    fontEmitter(option: number, inputId: number): void {
      const params: FieldUpdate = {
        fieldId: inputId,
        value: +option,
      };
      this.$emit('font-change', params);
    },
    imgEmitter(option: string, inputId: number): void {
      const params: FieldUpdate = {
        fieldId: inputId,
        value: +option.split(',')[0],
      };
      this.$emit('img-change', params);
    },
  },
});
</script>
