export interface Product {
  productId: number;
  id: string;
  name: string;
  thumbnailPath: string;
  imagePath: string;
  createdDate: string;
  modifiedDate: string;
  importedFrom: string;
}

export interface ProductState {
  id: string;
  name: string;
  createdDate: Date | string;
}

export interface ProductField {
  id: number;
  currentFont: string;
  fontList: DropdownOption[];
}

export interface DropdownOption {
  id: number;
  value: number | string;
  label: string;
}
