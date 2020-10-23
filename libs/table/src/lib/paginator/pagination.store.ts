import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { filter, tap, map, withLatestFrom, pairwise } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface PaginationState {
  /** The current page index. */
  pageIndex: number;
  /** The current page size */
  pageSize: number;
  /** The current total number of items being paged */
  total: number;
  /** The set of provided page size options to display to the user. */
  pageSizeOptions: ReadonlySet<number>;
}

/**
 * Change event object that is emitted when the user selects a
 * different page size or navigates to another page.
 */
export interface PageEvent extends Pick<PaginationState, 'pageIndex' | 'pageSize' | 'total'> {
  /**
   * Index of the page that was selected previously.
   */
  previousPageIndex?: number;
}

@Injectable()
export class PaginationStore extends ComponentStore<PaginationState> {
  constructor() {
    // set defaults
    super({
      pageIndex: 1,
      pageSize: 10,
      total: 0,
      pageSizeOptions: new Set<number>([10, 20, 50]),
    });
  }
  // *********** Updaters *********** //

  readonly setPageIndex = this.updater((state, value: string | number) => ({
    ...state,
    pageIndex: Number(value) || 1,
  }));

  readonly setPageSize = this.updater((state, value: string | number) => ({
    ...state,
    pageSize: Number(value) || 10,
  }));

  readonly setLength = this.updater((state, value: string | number) => ({
    ...state,
    total: Number(value) || 1,
  }));

  readonly setPageSizeOptions = this.updater((state, value: readonly number[]) => {
    // Making sure that the pageSize is included and sorted
    const pageSizeOptions = new Set<number>([...value, state.pageSize].sort((a, b) => a - b));
    return { ...state, pageSizeOptions };
  });

  readonly changePageSize = this.updater((state, newPageSize: number) => {
    const startIndex = state.pageIndex * state.pageSize;
    return {
      ...state,
      pageSize: newPageSize,
      pageIndex: Math.floor(startIndex / newPageSize),
    };
  });

  // *********** Selectors *********** //

  readonly hasPreviousPage$ = this.select(
    ({ pageIndex, pageSize }) => pageIndex >= 2 && pageSize != 0,
  );

  readonly numberOfPages$ = this.select(({ pageSize, total }) => {
    if (!pageSize) return 0;
    return Math.ceil(total / pageSize);
  });

  readonly hasNextPage$ = this.select(
    this.state$,
    this.numberOfPages$,
    ({ pageIndex, pageSize }, numberOfPages) => {
      return pageIndex < numberOfPages && pageSize != 0;
    },
  );

  readonly rangeLabel$ = this.select(({ pageIndex, pageSize, total }) => {
    if (total === 0 || pageSize === 0) return `0 od ${total}`;

    total = Math.max(total, 0);
    const startIndex = (pageIndex - 1) * pageSize;

    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex =
      startIndex < total ? Math.min(startIndex + pageSize, total) : startIndex + pageSize;

    return `${startIndex + 1} – ${endIndex} od ${total}`;
  });

  // ViewModel of Paginator component
  readonly vm$ = this.select(
    this.state$,
    this.hasPreviousPage$,
    this.hasNextPage$,
    this.rangeLabel$,
    (state, hasPreviousPage, hasNextPage, rangeLabel) => ({
      total: state.total,
      pageSize: state.pageSize,
      pageSizeOptions: Array.from(state.pageSizeOptions),
      pageIndex: state.pageIndex,
      hasPreviousPage,
      hasNextPage,
      rangeLabel,
    }),
  );

  private readonly pageIndexChanges$ = this.state$.pipe(
    // map instead of select, so that non-distinct value could go through
    map((state) => state.pageIndex),
    pairwise(),
  );

  readonly page$: Observable<PageEvent> = this.select(
    // first Observable 👇
    this.pageIndexChanges$,
    // second Observable 👇
    this.select((state) => [state.pageSize, state.total]),
    // Now combining the results from both of these Observables into a PageEvent object
    ([previousPageIndex, pageIndex], [pageSize, length]) => ({
      pageIndex,
      previousPageIndex,
      pageSize,
      total: length,
    }),
    // debounce, so that we let the state "settle"
    { debounce: true },
  );

  readonly nextPage = this.effect((trigger$) => {
    return trigger$.pipe(
      withLatestFrom(this.hasNextPage$),
      filter(([, hasNextPage]) => hasNextPage),
      tap(() => {
        this.setPageIndex(this.get().pageIndex + 1);
      }),
    );
  });

  readonly firstPage = this.effect((trigger$) => {
    return trigger$.pipe(
      withLatestFrom(this.hasPreviousPage$),
      filter(([, hasPreviousPage]) => hasPreviousPage),
      tap(() => {
        this.setPageIndex(0);
      }),
    );
  });

  readonly previousPage = this.effect((trigger$) => {
    return trigger$.pipe(
      withLatestFrom(this.hasPreviousPage$),
      filter(([, hasPreviousPage]) => hasPreviousPage),
      tap(() => {
        this.setPageIndex(this.get().pageIndex - 1);
      }),
    );
  });

  readonly lastPage = this.effect((trigger$) => {
    return trigger$.pipe(
      withLatestFrom(this.hasNextPage$, this.numberOfPages$),
      filter(([, hasNextPage]) => hasNextPage),
      tap(([, , numberOfPages]) => {
        this.setPageIndex(numberOfPages);
      }),
    );
  });
}
