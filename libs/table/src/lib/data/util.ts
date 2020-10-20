import { FloTableQueryParams, FloTableSort, FloTableSortOrder } from '@ngx-floyd/table';
import { NzTableQueryParams, NzTableSortOrder } from 'ng-zorro-antd/table';

export function nzToFloQueryParams(params: NzTableQueryParams): FloTableQueryParams {
  return {
    pageIndex: params.pageIndex,
    pageSize: params.pageSize,
    sortArray: nzToFloSort(params.sort),
    filterModel: {},
  };
}

export function nzToFloSort(
  nzSort: Array<{
    key: string;
    value: NzTableSortOrder;
  }>,
): FloTableSort[] {
  return nzSort
    .filter((s) => s.value)
    .map((nzSort) => <FloTableSort>{ field: nzSort.key, order: nzToFloSortOrder(nzSort.value) });
}

export function nzToFloSortOrder(order: NzTableSortOrder): FloTableSortOrder {
  return order === 'ascend' ? 'asc' : 'desc';
}
