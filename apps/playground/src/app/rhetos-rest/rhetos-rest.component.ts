import { Component, OnInit } from '@angular/core';
import { QueryableService, RhetosMetadata, RhetosRest } from '@ngx-floyd/rhetos';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Adresar } from '../core/rhetos-model';

@Component({
  selector: 'ngx-floyd-rhetos-rest',
  templateUrl: './rhetos-rest.component.html',
  styleUrls: ['./rhetos-rest.component.less'],
})
export class RhetosRestComponent implements OnInit {
  private search$ = new BehaviorSubject<string>('');
  private orderBy$ = new BehaviorSubject<keyof Adresar.Zupanija | null>(null);
  private zupanijaQueryableService: QueryableService<Adresar.Zupanija>;

  zupanije$: Observable<Adresar.Zupanija[]>;
  search = '';
  orderByOptions: string[];
  orderBy: keyof Adresar.Zupanija | null = null;

  constructor(private rhetosRest: RhetosRest, private rhetosMetadata: RhetosMetadata) {
    this.zupanijaQueryableService = this.rhetosRest.forQueryable(Adresar.ZupanijaInfo);
    this.orderByOptions = Object.keys(this.rhetosMetadata.for(Adresar.ZupanijaInfo).properties);
  }

  ngOnInit(): void {
    this.zupanije$ = combineLatest([this.search$.pipe(debounceTime(400)), this.orderBy$]).pipe(
      switchMap(([search, order]) =>
        this.zupanijaQueryableService.records((query) => {
          if (order) {
            query.orderBy(order);
          }

          if (search !== '') {
            query.where('Naziv', 'Contains', search);
          }

          return query;
        })
      )
    );
  }

  onSearchInputChange() {
    this.search$.next(this.search);
  }

  onOrderByChange() {
    this.orderBy$.next(this.orderBy);
  }
}
