import { shallowMount, VueWrapper } from '@vue/test-utils';
import DynamicProductForm from '@/views/product/components/DynamicProductForm.vue';
import {
  DropdownOption,
  ProductField,
} from '@/modules/product/models/product.interface';

const mockFields: ProductField[] = [
  {
    id: 1,
    fontList: [
      {
        id: 1,
        value:
          '/Content/fonts/frontEndDev/Crimson-Roman-36907fd5-1391-43a1-af38-1007f8bcd689.otf',
        label: 'Crimson Roman',
      },
      {
        id: 2,
        value:
          '/Content/fonts/frontEndDev/AlexBrush-Regular-8ea01138-9fbe-4044-b421-878c0609b083.ttf',
        label: 'AlexBrush Regular',
      },
    ] as DropdownOption[],
    currentFont:
      '/Content/fonts/frontEndDev/Crimson-Roman-36907fd5-1391-43a1-af38-1007f8bcd689.otf',
  },
];

describe('DynamicProductForm', () => {
  let mountFunc: (options?: any) => VueWrapper<any>;

  beforeEach(() => {
    mountFunc = (options): VueWrapper => {
      return shallowMount(DynamicProductForm, {
        ...options,
        props: { fields: mockFields },
      });
    };
  });

  it('renders the fields', () => {
    const wrapper = mountFunc();

    const textInputs = wrapper.findAll('input');
    const dropdowns = wrapper.findAll('select');

    expect(textInputs.length).toBeGreaterThan(0);
    expect(dropdowns.length).toBeGreaterThan(0);
  });

  it('emits the text field value when it changes', () => {
    const wrapper = mountFunc();

    wrapper.find('input').setValue('a');
    const inputEvents = wrapper.emitted('text-change') || [];

    expect(inputEvents).toHaveLength(1);
    expect(inputEvents[0]).toEqual(['a', 1]);
  });

  it('emits the font value when it changes', () => {
    const wrapper = mountFunc();

    wrapper.find('select').setValue(2);
    const dropdownEvents = wrapper.emitted('font-change') || [];

    expect(dropdownEvents).toHaveLength(1);
    expect(dropdownEvents[0]).toEqual([2, 1]);
  });
});
