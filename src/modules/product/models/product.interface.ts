export interface Product {
  productId: number;
  id: string;
  name: string;
  thumbnailPath: string;
  imagePath: string;
  createdDate: Date;
  modifiedDate: Date;
  importedFrom: string;
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
