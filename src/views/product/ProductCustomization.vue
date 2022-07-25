<template>
  <div class="row mx-0 row-cols-1 row-cols-md-2 g-4 gx-md-5">
    <div class="col">
      <canvas id="product-preview"></canvas>
    </div>
    <div class="col">
      <div class="product-customize">
        <div class="product-info">
          <span class="fw-bold">{{ selectedProduct.name }}</span>
          <span>{{ selectedProduct.createdDate }}</span>
        </div>
        <dynamic-form
          class="mt-4"
          :fields="fields"
          @text-change="setText"
          @font-change="setFont"
          @img-change="setImg"
        />
      </div>
    </div>
    <div class="col">
      <button type="button" class="btn btn-secondary rounded-0" @click="goBack">
        Back
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { mapState, mapWritableState } from 'pinia';
import {
  DropdownOption,
  FieldType,
  FieldUpdate,
  ProductField,
} from '@/modules/product/models/product.interface';
import { useProductStore } from '@/modules/product/store';
import DynamicForm from '@/views/product/components/DynamicProductForm.vue';
import { useAppStore } from '@/modules/app/store';

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
  computed: {
    ...mapState(useProductStore, ['selectedProduct']),
    ...mapWritableState(useAppStore, ['isLoading']),
    customilyLib() {
      return window.engraver;
    },
  },
  async mounted() {
    await this.initProductCanvas();
  },
  methods: {
    async initProductCanvas(): Promise<void> {
      this.isLoading = true;
      this.customilyLib.init('product-preview');
      await this.customilyLib.setProduct(this.productId);
      const { preview: product } = this.customilyLib.currentProduct;

      this.fields = product.textsPreview.map(
        (field): ProductField => ({
          id: field.id,
          type: FieldType.font,
          currentFont: field.fontPath,
          fontList: this.mapDropdownOptions(field.fontsMap),
        })
      );

      for (const image of product.imagePlaceHoldersPreview) {
        if (!image.dynamicImagesPath) continue;

        this.fields.push({
          id: image.id,
          type: FieldType.image,
          imgOptions: image.dynamicImagesPath,
        });
      }

      this.isLoading = false;
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
    setText(option: FieldUpdate): void {
      this.customilyLib.setText(option.fieldId, option.value);
    },
    setFont(option: FieldUpdate): void {
      this.customilyLib.setFont(option.fieldId, option.value);
    },
    setImg(option: FieldUpdate): void {
      this.customilyLib.setPresetImage(option.fieldId, option.value);
    },
    goBack() {
      this.$router.go(-1);
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
.btn-secondary {
  width: 40%;
}
@media only screen and (max-width: 768px) {
  .btn-secondary {
    width: 100%;
  }
}
</style>
