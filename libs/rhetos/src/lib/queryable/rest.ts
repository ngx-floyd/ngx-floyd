import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';
import { StructureService } from '../structure/rest';
import {
  Records,
  RecordsWithCount,
  RhetosQueryFn,
  RhetosQueryParams,
  TotalCount,
} from './interfaces';
import { RhetosQueryBuilder } from './query-builder';
import { getQueryHttpParams } from './util';
import { Entity } from '../entity/interfaces';

export class QueryableService<T extends Entity> extends StructureService {
  single(id: string): Observable<T> {
    return this.restService.request<T>(this._key, 'GET', id);
  }

  all(): Observable<T[]> {
    return this.restService.request<{ Records: T[] }>(this._key, 'GET').pipe(pluck('Records'));
  }

  records(queryFn?: RhetosQueryFn<T>): Observable<T[]> {
    const params = processRhetosQueryFn(queryFn);

    return this.restService
      .request<{ Records: T[] }>(this._key, 'GET', '', {}, getQueryHttpParams(params))
      .pipe(pluck('Records'));
  }

  count(queryFn?: RhetosQueryFn<T>): Observable<number> {
    const params = processRhetosQueryFn(queryFn);

    return this.restService
      .request<{ TotalCount: number }>(
        this._key,
        'GET',
        'TotalCount',
        {},
        getQueryHttpParams(params)
      )
      .pipe(pluck('TotalCount'));
  }

  recordsWithCount(queryFn?: RhetosQueryFn<T>): Observable<RecordsWithCount<T>> {
    const params = processRhetosQueryFn(queryFn);
    return this.restService
      .request<{ Records: T[]; TotalCount: number }>(
        this._key,
        'GET',
        'RecordsAndTotalCount',
        {},
        getQueryHttpParams(params)
      )
      .pipe(
        map((res) => <RecordsWithCount<T>>{ records: res.Records, totalCount: res.TotalCount })
      );
  }
}

export function processRhetosQueryFn<T>(queryFn?: RhetosQueryFn<T>): RhetosQueryParams<T> {
  return queryFn ? (queryFn(new RhetosQueryBuilder<T>()) as RhetosQueryBuilder<T>).getParams() : {};
}
