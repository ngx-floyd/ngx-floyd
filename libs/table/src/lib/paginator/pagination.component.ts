import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { PaginationStore } from './pagination.store';
@Component({
  selector: 'flo-pagination',
  templateUrl: './pagination.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PaginationStore],
})
export class PaginationComponent {
  @Input() set pageIndex(value: string | number) {
    this.paginatorStore.setPageIndex(value);
  }

  @Input() set length(value: number) {
    this.paginatorStore.setLength(value);
  }

  @Input() set pageSize(value: string | number) {
    this.paginatorStore.setPageSize(value);
  }

  @Input() set pageSizeOptions(value: readonly number[]) {
    this.paginatorStore.setPageSizeOptions(value);
  }

  // Outputing the event directly from the page$ Observable<PageEvent> property.
  /** Event emitted when the paginator changes the page size or page index. */
  @Output() readonly page = this.paginatorStore.page$;

  // ViewModel for the PaginatorComponent
  readonly vm$ = this.paginatorStore.vm$;

  constructor(private readonly paginatorStore: PaginationStore) {}

  changePageSize(newPageSize: number) {
    this.paginatorStore.changePageSize(newPageSize);
  }
  nextPage() {
    this.paginatorStore.nextPage();
  }
  firstPage() {
    this.paginatorStore.firstPage();
  }
  previousPage() {
    this.paginatorStore.previousPage();
  }
  lastPage() {
    this.paginatorStore.lastPage();
  }
}
