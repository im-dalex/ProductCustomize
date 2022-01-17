import { shallowMount } from '@vue/test-utils';
import { createTestingPinia } from '@pinia/testing';
import flushPromises from 'flush-promises';
import { Wrapper } from 'tests/utils/VueWrapper';
import ProductCustomization from '@/views/product/ProductCustomization.vue';
import DynamicForm from '@/views/product/components/DynamicProductForm.vue';
import { FieldUpdate } from '@/modules/product/models/product.interface';

const mockRouter = { go: jest.fn() };
const mockProduct = 'bfba44e2-9253-48a7-b372-25b4b3a4230e';
const mockEngraver = {
  init: jest.fn(),
  setProduct: jest.fn(),
  setText: jest.fn(),
  setFont: jest.fn(),
  currentProduct: {
    preview: {
      textsPreview: [
        {
          id: 1,
          fontPath:
            '/Content/fonts/frontEndDev/Crimson-Roman-36907fd5-1391-43a1-af38-1007f8bcd689.otf',
          fontsMap:
            '[[1,"/Content/fonts/frontEndDev/Crimson-Roman-36907fd5-1391-43a1-af38-1007f8bcd689.otf"],[2,"/Content/fonts/frontEndDev/AlexBrush-Regular-8ea01138-9fbe-4044-b421-878c0609b083.ttf"]]',
        },
      ],
    },
  },
};

describe('ProductCustomization', () => {
  let mountFunc: Wrapper;
  beforeEach(() => {
    window.engraver = { ...mockEngraver };
    mountFunc = (options) => {
      return shallowMount(ProductCustomization, {
        ...options,
        props: { productId: mockProduct },
        global: {
          ...options?.global,
          plugins: [createTestingPinia()],
        },
      });
    };
  });

  it('gets the product fields', async () => {
    const wrapper = mountFunc();
    await flushPromises();

    const fields = wrapper.vm.fields;
    const formComponent = wrapper.findComponent(DynamicForm);

    expect(fields.length).toBeGreaterThan(0);
    expect(formComponent.exists()).toBeTruthy();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('returns to the product page', () => {
    const wrapper = mountFunc({
      global: {
        mocks: {
          $router: mockRouter,
        },
      },
    });

    wrapper.find('button').trigger('click');

    expect(mockRouter.go).toHaveBeenCalledTimes(1);
    expect(mockRouter.go).toHaveBeenCalledWith(-1);
  });

  it('updates the font', () => {
    const wrapper = mountFunc();
    const mockOption: FieldUpdate = {
      fieldId: 1,
      value: 1,
    };

    wrapper.vm.setFont(mockOption);
    const setFontFunc = wrapper.vm.customilyLib.setFont;

    expect(setFontFunc).toHaveBeenCalled();
    expect(setFontFunc).toHaveBeenCalledWith(
      mockOption.fieldId,
      mockOption.value
    );
  });

  it('updates the text', () => {
    const wrapper = mountFunc();
    const mockOption: FieldUpdate = {
      fieldId: 1,
      value: 'my text',
    };

    wrapper.vm.setText(mockOption);
    const setTextFunc = wrapper.vm.customilyLib.setText;

    expect(setTextFunc).toHaveBeenCalled();
    expect(setTextFunc).toHaveBeenCalledWith(
      mockOption.fieldId,
      mockOption.value
    );
  });
});
