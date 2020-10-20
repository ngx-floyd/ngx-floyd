import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RecordsWithCount, RhetosMetadata, RhetosRest, StructureMetadata } from '@ngx-floyd/rhetos';
import { FloColDef, FloTableOptions, FloTableQueryParams } from '@ngx-floyd/table';
import { Observable, Subject } from 'rxjs';
import { share, switchMap } from 'rxjs/operators';
import { Adresar } from '../core/rhetos-model';

@Component({
  selector: 'ngx-floyd-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent implements OnInit {
  INFO = Adresar.DrzavaBrowseInfo;
  dataRes$: Observable<RecordsWithCount<Adresar.DrzavaBrowse>>;
  meta: StructureMetadata<Adresar.DrzavaBrowse>;
  columns: FloColDef[];
  options: FloTableOptions = {
    serverSide: true,
  };

  private queryParams$ = new Subject<FloTableQueryParams>();

  constructor(private rhetosRest: RhetosRest, private rhetosMeta: RhetosMetadata) {
    this.dataRes$ = this.queryParams$.pipe(
      switchMap((q) =>
        this.rhetosRest.forQueryable<any>(this.INFO).recordsWithCount((query) => {
          query.take(q.pageSize).skip((q.pageIndex - 1) * q.pageSize);
          q.sortArray.forEach((s) => query.orderBy(s.field, s.order));
          return query;
        }),
      ),
      share(),
    );
    this.meta = this.rhetosMeta.for(this.INFO);
    this.columns = Object.keys(this.meta.properties).map(
      (key) => <FloColDef>{ field: key, title: key },
    );
  }

  ngOnInit(): void {}

  onQueryParamsChange($event: FloTableQueryParams) {
    this.queryParams$.next($event);
  }
}
