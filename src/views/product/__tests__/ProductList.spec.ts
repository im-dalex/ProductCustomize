import { shallowMount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import ProductList from '@/views/product/ProductList.vue';
import ProductCard from '@/views/product/components/ProductCard.vue';
import { createTestingPinia } from '@pinia/testing';
import { Wrapper } from 'tests/utils/VueWrapper';

jest.mock('@/modules/product/product.service', () => {
  return {
    getProducts: () => {
      return Promise.resolve([
        {
          ProductId: 144236,
          id: 'bfba44e2-9253-48a7-b372-25b4b3a4230e',
          name: 'Black flip cover',
          thumbnailPath:
            '/Content/product-images/thumbnails/c283a6cd-dfd7-4-c6ab751c-b7b0-4a24-aa32-95526943f87e.png',
          imagePath:
            'https://beta.customily.com/Content/product-images/c283a6cd-dfd7-4-29bc489f-4c62-4557-92fe-1f95bded3080.jpg',
          createdDate: '2022-01-03T18:14:23.780266',
          modifiedDate: '2022-01-03T18:28:03.709011',
          importedFrom: '5f2eec05-6e52-4c64-bc06-822b0f067b28',
        },
        {
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
        },
        {
          ProductId: 144225,
          id: '58813351-7fae-480b-8b90-06c74c93755c',
          name: 'Heart Coinpurse',
          thumbnailPath:
            '/Content/product-images/thumbnails/71c1cf9b-f1a2-4-3c765adf-dde0-4a9c-9a03-ace4edbcf3ea.png',
          imagePath:
            'https://beta.customily.com/Content/product-images/71c1cf9b-f1a2-4-836aea5d-de29-494b-8171-83a0a8a42a15.jpg',
          createdDate: '2022-01-03T18:11:03.767894',
          modifiedDate: '2022-01-03T18:28:14.967231',
          importedFrom: 'a5e894ca-5712-4dc3-8ef2-2a65f08ad9c1',
        },
        {
          ProductId: 144232,
          id: '72fc3051-2564-45a1-8df4-bb1289df7f52',
          name: 'Jewelry Box',
          thumbnailPath:
            '/Content/product-images/thumbnails/1f0ee228-73d8-4-e30ea47e-a625-4590-935b-ed79ed87849c.png',
          imagePath:
            'https://beta.customily.com/Content/product-images/1f0ee228-73d8-4-849bc64a-fb6f-4a05-9b45-8656c0591b75.jpg',
          createdDate: '2022-01-03T18:13:47.802576',
          modifiedDate: '2022-01-03T18:28:19.745371',
          importedFrom: '60e27317-1bc1-49f6-8b7c-c74f28b5bba8',
        },
        {
          ProductId: 144233,
          id: '8b1172b5-07f3-4348-ad5d-286daa3c996a',
          name: 'Luggage Tag',
          thumbnailPath:
            '/Content/product-images/thumbnails/c3618ea5-7c64-4-8146d3cf-9339-4ed3-be6e-3e40642782be.png',
          imagePath:
            'https://beta.customily.com/Content/product-images/c3618ea5-7c64-4-6c2ba080-aa5d-4345-b097-4c7788e15bb0.jpg',
          createdDate: '2022-01-03T18:13:55.932252',
          modifiedDate: '2022-01-03T18:28:23.987286',
          importedFrom: '464c481b-65d8-4006-8151-c10846020e75',
        },
        {
          ProductId: 144227,
          id: '38f00e2b-3a88-4b0f-9a79-e7fe3b029d99',
          name: 'Makeup bag',
          thumbnailPath:
            '/Content/product-images/thumbnails/f89d8027-16a2-4-7ef0e4d7-b41f-4097-8bf3-845e193a16f2.png',
          imagePath:
            'https://beta.customily.com/Content/product-images/f89d8027-16a2-4-955dd52a-9f94-4b00-8816-ef8808ad2226.png',
          createdDate: '2022-01-03T18:11:33.116441',
          modifiedDate: '2022-01-03T18:28:28.571753',
          importedFrom: 'a67b5c68-ce51-4df6-bb94-990bfb2389b1',
        },
        {
          ProductId: 144234,
          id: '430a4504-185e-44bf-a774-b076741a8305',
          name: 'Passport holder',
          thumbnailPath:
            '/Content/product-images/thumbnails/72f97a2b-2123-4-83d24a41-d71a-4204-8ca0-77eb98c2ab69.png',
          imagePath:
            'https://beta.customily.com/Content/product-images/72f97a2b-2123-4-05edb550-f6b1-44ee-af10-f2b8a7040b0a.jpg',
          createdDate: '2022-01-03T18:14:04.249152',
          modifiedDate: '2022-01-03T18:28:32.313034',
          importedFrom: 'b01009f7-daa6-4860-b2ca-b1c41bbfa0a7',
        },
        {
          ProductId: 144237,
          id: '29e7c8dc-2a9f-450f-a68f-ae019cad010c',
          name: 'Pink heart Keychain',
          thumbnailPath:
            '/Content/product-images/thumbnails/ddd04d92-7de1-4-0c1f8130-7616-46ba-89a6-2f35f8d5eb33.png',
          imagePath:
            'https://beta.customily.com/Content/product-images/ddd04d92-7de1-4-4e8f7be8-4032-4754-9dc2-06c443011cb3.jpg',
          createdDate: '2022-01-03T18:27:50.862746',
          modifiedDate: '2022-01-03T18:28:36.740855',
          importedFrom: 'c9b120b8-b563-47f0-9fdb-552139c5342b',
        },
      ]);
    },
  };
});

const mockRouter = { push: jest.fn() };

describe('ProductList', () => {
  let mountFunc: Wrapper;

  beforeEach(() => {
    mountFunc = (options) => {
      return shallowMount(ProductList, { ...options });
    };
  });

  it('loads the products', async () => {
    const wrapper = mountFunc();
    await flushPromises();
    const products = wrapper.vm.products;
    expect(products.length).toBeGreaterThan(0);
  });

  it('renders the products', async () => {
    const wrapper = mountFunc();
    await flushPromises();
    const products = wrapper.findAllComponents(ProductCard);
    expect(products.length).toBe(8);
    expect(wrapper.html()).toMatchSnapshot();
  });

  it('navigates to product customization view', async () => {
    const wrapper = mountFunc({
      global: {
        plugins: [createTestingPinia()],
        mocks: {
          $router: mockRouter,
        },
      },
    });
    await flushPromises();

    const productId = 'bfba44e2-9253-48a7-b372-25b4b3a4230e';
    wrapper.vm.tryItHandler(productId, 0);

    expect(mockRouter.push).toHaveBeenCalledTimes(1);
    expect(mockRouter.push).toHaveBeenCalledWith({
      name: 'ProductCustomization',
      params: { productId },
    });
  });
});
