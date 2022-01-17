import { shallowMount, VueWrapper } from '@vue/test-utils';
import ProductCard from '@/views/product/components/ProductCard.vue';
import { Product } from '@/modules/product/models/product.interface';

const mockProduct: Product = {
  ProductId: 144231,
  id: '26b83d95-3806-4f66-a805-dab2389357df',
  name: 'Grey Pouch',
  thumbnailPath:
    '/Content/product-images/thumbnails/df30c4c7-5545-4-d954fcd8-6402-457f-9a11-6e1ae457d568.png',
  imagePath:
    'https://beta.customily.com/Content/product-images/df30c4c7-5545-4-a2e627e1-84df-408d-a700-a9c3247e3b6e.jpg',
  createdDate: '2022-01-03T18:13:40.673794',
  modifiedDate: '2022-01-03T18:28:09.339702',
  importedFrom: '03f13ab9-7736-49a6-a458-5d38077c1193',
};

describe('ProductCard', () => {
  let mountFunc: (options?: any) => VueWrapper<any>;

  beforeEach(() => {
    mountFunc = (options): VueWrapper => {
      return shallowMount(ProductCard, {
        ...options,
        props: { product: mockProduct },
      });
    };
  });

  it('emits an event when button is clicked', async () => {
    const wrapper = mountFunc();

    await wrapper.find('button').trigger('click');
    const clickEvents = wrapper.emitted('try-it') || [];
    const expectedProductId = wrapper.vm.product.importedFrom;

    expect(clickEvents).toHaveLength(1);
    expect(clickEvents[0]).toStrictEqual([expectedProductId]);
  });
});
