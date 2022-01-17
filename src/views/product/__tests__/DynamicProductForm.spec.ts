import { shallowMount } from '@vue/test-utils';
import DynamicProductForm from '@/views/product/components/DynamicProductForm.vue';
import {
  DropdownOption,
  FieldUpdate,
  ProductField,
} from '@/modules/product/models/product.interface';
import { Wrapper } from 'tests/utils/VueWrapper';

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
  let mountFunc: Wrapper;

  beforeEach(() => {
    mountFunc = (options) => {
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
    const mockOption: FieldUpdate = {
      fieldId: 1,
      value: 'a',
    };

    wrapper.find('input').setValue(mockOption.value);
    const inputEvents = wrapper.emitted('text-change') || [];

    expect(inputEvents).toHaveLength(1);
    expect(inputEvents[0]).toEqual([mockOption]);
  });

  it('emits the font value when it changes', () => {
    const wrapper = mountFunc();
    const mockOption: FieldUpdate = {
      fieldId: 1,
      value: 2,
    };

    wrapper.find('select').setValue(mockOption.value);
    const dropdownEvents = wrapper.emitted('font-change') || [];

    expect(dropdownEvents).toHaveLength(1);
    expect(dropdownEvents[0]).toEqual([mockOption]);
  });
});
