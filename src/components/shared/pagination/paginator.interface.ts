export interface Paginator {
  pageCount: number;
  pageSize: number;
  nextDisabled?: boolean;
  toCount: number;
  fromCount: number;
}
