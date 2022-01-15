import { api } from '@/core/api';
import { Product } from '@/modules/product/models/product.interface';

const CONTROLLER = 'api/Product';

export const getProducts = (
  from: number,
  to: number,
  searchString = ''
): Promise<Product[]> =>
  api
    .get(`${CONTROLLER}/GetProductsFromTo`, {
      params: { searchString, from, to },
    })
    .then(({ data, config }) => {
      const { baseURL } = config;
      return data.map((product: Product) => ({
        ...product,
        imagePath: `${baseURL}${product.imagePath}`,
      }));
    });
