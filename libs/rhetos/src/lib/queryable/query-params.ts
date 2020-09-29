import { GenericFilter, PredefinedFilter, RhetosFilter } from './interfaces';

export function isGenericFilter<T = unknown>(filter: RhetosFilter<T>): filter is GenericFilter<T> {
  return filter.hasOwnProperty('operation');
}

export function isPredefinedFilter<T>(filter: RhetosFilter): filter is PredefinedFilter<T> {
  return filter.hasOwnProperty('info');
}
