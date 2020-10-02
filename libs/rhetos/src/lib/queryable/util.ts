import { HttpParams } from '@angular/common/http';
import { FloSafeAny } from '@ngx-floyd/core';
import { getKey } from '../core/util';
import {
  GenericFilter,
  PredefinedFilter,
  RhetosFilter,
  RhetosQueryParams,
  RhetosSortModel,
} from './interfaces';

export function getQueryHttpParams(query?: RhetosQueryParams): HttpParams {
  if (!query) return new HttpParams();

  const params: { [param: string]: string | ReadonlyArray<string> } = {};

  const filtersValue = getFiltersString([
    ...(query.genericFilters ?? []),
    ...(query.predefinedFilters ?? []),
  ]);
  if (filtersValue) params.filters = filtersValue;

  params.sort = query.sort ? getSortString(query.sort) : getDefaultSort();

  if (query.top) params.top = query.top.toString();
  if (query.skip) params.skip = query.skip.toString();

  return new HttpParams({ fromObject: params });
}

export function getSortString(value?: RhetosSortModel[]): string {
  if (value && value.length > 0) {
    return (<Array<RhetosSortModel>>value)
      .map((s) => {
        const field = s.field;
        const order = s.order ? ' ' + s.order : '';
        return field.toString() + order;
      })
      .join(',');
  } else {
    return getDefaultSort();
  }
}

export function isGenericFilter<T = unknown>(filter: RhetosFilter<T>): filter is GenericFilter<T> {
  return filter.hasOwnProperty('operation');
}

export function isPredefinedFilter<T>(filter: RhetosFilter): filter is PredefinedFilter<T> {
  return filter.hasOwnProperty('info');
}

export function getFiltersString(filters?: RhetosFilter[]): string | undefined {
  const filtersArray: string[] = [];

  filters?.forEach((f) => {
    if (isGenericFilter(f)) {
      const copy = { ...f };

      // Remove null and undefined values from generic array filter
      if (Array.isArray(copy.value)) {
        copy.value = copy.value.filter((v) => v !== undefined);
      }

      // filtersArray.push(JSON.stringify(copy));
      filtersArray.push(getGenericFilterString(copy));
    }

    if (isPredefinedFilter(f)) {
      filtersArray.push(getPredefinedFilterString(f));
    }
  });

  return filtersArray.length > 0 ? '[' + filtersArray.join(',') + ']' : undefined;
}

export function getGenericFilterString(filter: GenericFilter<FloSafeAny>) {
  return JSON.stringify(filter);
}

export function getPredefinedFilterString(filter: PredefinedFilter) {
  return JSON.stringify({
    Filter: getKey(filter.filterInfo).replace('/', '.'),
    Value: filter.value,
  });
}

export function getDefaultSort() {
  return 'ID ASC';
}
