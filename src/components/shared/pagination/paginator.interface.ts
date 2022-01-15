export interface Paginator {
  pageCount: number;
  pageSize: number;
  nextDisabled?: boolean;
  toItem: number;
  fromItem: number;
}
