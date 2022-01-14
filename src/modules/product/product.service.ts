import { api } from "@/core/api";
import { Product } from "@/modules/product/models/product.interface";

const CONTROLLER = "api/Product";

export const getProducts = (
  from: number,
  to: number,
  searchString?: string
): Promise<Product[]> =>
  api.get(`${CONTROLLER}/GetProductsFromTo`, {
    params: { searchString, from, to },
  });
