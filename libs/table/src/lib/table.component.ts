import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
  TrackByFunction,
  ViewEncapsulation,
} from '@angular/core';
import { NzTableSortOrder } from 'ng-zorro-antd/table';
import { Observable } from 'rxjs';
import { FloDataStore } from './data/data.store';
import { nzToFloSortOrder } from './data/util';
import { FloColDef, FloTableOptions, FloTableSelection } from './interfaces';
import { FloOptionsStore } from './options/options.store';
import { RowNode } from './rows/interfaces';
import { FloRowService } from './rows/service';
import { FloRowStore } from './rows/store';

@Component({
  selector: 'flo-table',
  templateUrl: './table.component.html',
  providers: [FloOptionsStore, FloDataStore, FloRowService, FloRowStore],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  @Input() set data(val: any[]) {
    const data = val ?? [];

    this.dataStore.setData(data);
    if (!this.serverSide) {
      this.dataStore.setTotal(data.length);
    }
  }

  @Input() set total(val: number) {
    this.dataStore.setTotal(val);
  }

  @Input() columns: FloColDef[] = [];

  @Input() serverSide: boolean = false;

  // Selection
  @Input() selection?: FloTableSelection;

  @Input() options?: FloTableOptions;

  @Output() queryParamsChange = this.dataStore.queryParams$;
  @Output() currentPageDataChange = this.dataStore.currentPageData$;

  _data$: Observable<any[]>;
  _total$: Observable<number>;
  _pageIndex$: Observable<number>;
  _pageSize$: Observable<number>;

  constructor(private dataStore: FloDataStore, private rowsStore: FloRowStore) {
    this._data$ = this.dataStore.data$;
    this._total$ = this.dataStore.total$;
    this._pageIndex$ = this.dataStore.pageIndex$;
    this._pageSize$ = this.dataStore.pageSize$;

    this.rowsStore.loadData(this.dataStore.data$);
  }

  ngOnInit(): void {}

  onCurrentPageDataChange(data: any[]): void {
    this.dataStore.setCurrentPageData(data);
  }

  onPageIndexChange($event: number) {
    this.dataStore.setPageIndex($event);
  }

  onPageSizeChange($event: number) {
    this.dataStore.setPageSize($event);
    this.dataStore.setPageIndex(1);
  }

  onSortOrderChange(field: string, order: NzTableSortOrder) {
    this.dataStore.setSortArray(order ? [{ field, order: nzToFloSortOrder(order) }] : []); // TODO: implement multiple sort
    this.dataStore.setPageIndex(1);
  }

  rowTrackByFn: TrackByFunction<RowNode> = (index, item) => item.id;
}
