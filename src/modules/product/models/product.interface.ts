export interface Product {
  ProductId: number;
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

export enum FieldType {
  font,
  image,
}

export interface ProductField {
  id: number;
  type: FieldType;
  currentFont?: string;
  fontList?: DropdownOption[];
  imgOptions?: Map<number, string>[];
}

export interface DropdownOption {
  id: number;
  value: number | string;
  label: string;
}

export interface FieldUpdate {
  fieldId: number;
  value: string | number;
}
