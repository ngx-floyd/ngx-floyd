import { FloSafeAny } from '@ngx-floyd/core';
import { StructureInfo } from '../structure/info';

export interface Records<T = unknown> {
  records: T[];
}

export interface TotalCount {
  totalCount: number;
}

export interface RecordsWithCount<T = unknown> extends Records<T>, TotalCount {}

export type RhetosSortOrder = 'asc' | 'desc';

export interface RhetosSortModel<T = FloSafeAny, K extends keyof T = keyof T> {
  field: K;
  order?: RhetosSortOrder;
}

export type RhetosFilter<T = FloSafeAny> = GenericFilter<T> | PredefinedFilter;

export interface GenericFilter<T, K extends keyof T = keyof T> {
  property: K;
  operation: EqualsOperation | NumberOperation | StringOperation | DateOperation;
  value: T[K] | T[K][];
}

export type FilterValue<
  T,
  K extends keyof T,
  O extends FilterOperation<T, K>
> = O extends ArrayOperation ? T[K][] : O extends 'DateIn' | 'DateNotIn' ? string : T[K];
export type FilterOperation<T, K extends keyof T> =
  | (T[K] extends boolean ? EqualsOperation : never)
  | (T[K] extends string ? StringOperation : never)
  | (T[K] extends Date ? DateOperation : never)
  | (T[K] extends number ? NumberOperation : never);
export type EqualsOperation = 'Equals' | 'NotEquals';
export type CompareOperation = 'Greater' | 'GreaterEqual' | 'Less' | 'LessEqual';
export type ArrayOperation = 'In' | 'NotIn';
export type NumberOperation = ArrayOperation | EqualsOperation | CompareOperation;
export type StringOperation =
  | ArrayOperation
  | EqualsOperation
  | CompareOperation
  | 'StartsWith'
  | 'EndsWith'
  | 'Contains'
  | 'NotContains';
export type DateOperation =
  | ArrayOperation
  | EqualsOperation
  | CompareOperation
  | 'DateIn'
  | 'DateNotIn';

export interface PredefinedFilter<T = unknown> {
  filterInfo: StructureInfo<T>;
  value?: T;
}

export interface RhetosQueryParams<T = FloSafeAny> {
  skip?: number;
  top?: number;
  sort?: RhetosSortModel<T>[];
  predefinedFilters?: PredefinedFilter[];
  genericFilters?: GenericFilter<T>[];
}

export interface RhetosQuery<T> {
  take(take?: number): RhetosQuery<T>;
  skip(skip?: number): RhetosQuery<T>;
  orderBy(field: keyof T, order?: 'asc' | 'desc'): RhetosQuery<T>;
  filterBy<S>(filter: StructureInfo<S>, value?: S): RhetosQuery<T>;
  where<K extends keyof T, O extends FilterOperation<T, K>>(
    property: K,
    operation: O,
    value: FilterValue<T, K, O>
  ): RhetosQuery<T>;
}

export type RhetosQueryFn<T> = (query: RhetosQuery<T>) => RhetosQuery<T>;
