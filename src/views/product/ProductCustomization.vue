<template>
  <div class="row mx-0 row-cols-1 row-cols-md-2 g-4 gx-md-5">
    <div class="col">
      <canvas id="product-preview"></canvas>
    </div>
    <div class="col">
      <div class="product-customize">
        <div class="product-info">
          <span class="fw-bold"> Producto 1 </span>
          <span> 10/2/2020 </span>
        </div>
        <dynamic-form
          class="mt-4"
          :fields="fields"
          @text-change="setText"
          @font-change="setFont"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import {
  DropdownOption,
  ProductField,
} from '@/modules/product/models/product.interface';
import DynamicForm from '@/views/product/components/DynamicProductForm.vue';

const customilyLib = window.engraver;

export default defineComponent({
  name: 'ProductCustomization',
  components: { DynamicForm },
  props: {
    productId: {
      type: String as PropType<string>,
      required: true,
    },
  },
  data: () => ({
    fields: [] as ProductField[],
  }),
  async mounted() {
    await this.initProductCanvas();
  },
  methods: {
    async initProductCanvas(): Promise<void> {
      customilyLib.init('product-preview');
      await customilyLib.setProduct(this.productId);
      const { preview: product } = customilyLib.currentProduct;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.fields = product.textsPreview.map((field: any) => ({
        id: field.id,
        fontList: this.mapDropdownOptions(field.fontsMap),
        currentFont: field.fontPath,
      }));
    },
    mapDropdownOptions(strOptions: string): DropdownOption[] {
      const options = JSON.parse(strOptions);
      return options.map((option: [number, string]) => ({
        id: option[0],
        value: option[1],
        label: this.getFontLabel(option[1]),
      }));
    },
    getFontLabel(font: string): string | undefined {
      const fontType = font.split('/').pop();
      return fontType?.split('-').slice(0, 2).join(' ');
    },
    setText(text: string, fieldId: string): void {
      customilyLib.setText(fieldId, text);
    },
    setFont(option: number, fieldId: string): void {
      customilyLib.setFont(fieldId, option);
    },
  },
});
</script>

<style lang="scss" scoped>
.product-customize {
  padding: 1rem;
  height: 100%;
  background: #ebebeb;
  .product-info {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
// primary color #839ad9
// secondary color #a1a1a1
</style>
