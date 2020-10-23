import { Injectable } from '@angular/core';
import { FloTableFilterModel, FloTableQueryParams, FloTableSort } from '@ngx-floyd/table';
import { FloComponentStore } from '../core/component-store';

export interface DataState {
  data: any[];
  total: number;
  pageIndex: number;
  pageSize: number;
  sortArray: FloTableSort[];
  filterModel: FloTableFilterModel;
  currentPageData: any[];
}

export const getDefaultDataState = (): DataState => ({
  data: [],
  total: 0,
  pageIndex: 1,
  pageSize: 30,
  sortArray: [],
  filterModel: {},
  currentPageData: [],
});

@Injectable()
export class FloDataStore extends FloComponentStore<DataState> {
  constructor() {
    super(getDefaultDataState());
  }

  // Selectors
  readonly state$ = this.select((s) => s, { debounce: true });
  readonly data$ = this.select((s) => s.data, { debounce: true });
  readonly currentPageData$ = this.select((s) => s.currentPageData, { debounce: true });
  readonly total$ = this.select((s) => s.total, { debounce: true });
  readonly pageIndex$ = this.select((s) => s.pageIndex, { debounce: true });
  readonly pageSize$ = this.select((s) => s.pageSize, { debounce: true });
  readonly sortArray = this.select((s) => s.sortArray, { debounce: true });
  readonly filterModel = this.select((s) => s.filterModel, { debounce: true });
  readonly queryParams$ = this.select(
    this.pageIndex$,
    this.pageSize$,
    this.sortArray,
    this.filterModel,
    (pageIndex, pageSize, sortArray, filterModel) => ({
      pageIndex,
      pageSize,
      sortArray,
      filterModel,
    }),
    { debounce: true },
  );

  // Updaters
  readonly setData = this.updater((state, data: any[]) => ({ ...state, data }));
  readonly setCurrentPageData = this.updater((state, currentPageData: any[]) => ({
    ...state,
    currentPageData,
  }));
  readonly setTotal = this.updater((state, total: number) => ({ ...state, total }));
  readonly setQueryParams = this.updater((state, queryParams: FloTableQueryParams) => ({
    ...state,
    queryParams,
  }));
  readonly setPageIndex = this.updater((state, pageIndex: number) => ({ ...state, pageIndex }));
  readonly setPageSize = this.updater((state, pageSize: number) => ({ ...state, pageSize }));
  readonly setPagination = this.updater(
    (state, pagination: { pageIndex: number; pageSize: number }) => ({ ...state, ...pagination }),
  );
  readonly setSortArray = this.updater((state, sortArray: FloTableSort[]) => ({
    ...state,
    sortArray,
  }));

  // Getters
  getCurrentPageData() {
    return this.get().currentPageData;
  }
}
