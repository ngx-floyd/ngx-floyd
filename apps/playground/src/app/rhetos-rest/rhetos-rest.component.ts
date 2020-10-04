import { Component, OnInit } from '@angular/core';
import { newGuid } from '@ngx-floyd/core';
import {
  createEntity,
  EntityService,
  RhetosMetadata,
  RhetosRest,
  StructureMetadata,
} from '@ngx-floyd/rhetos';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Adresar, Common } from '../core/rhetos-model';

@Component({
  selector: 'ngx-floyd-rhetos-rest',
  templateUrl: './rhetos-rest.component.html',
  styleUrls: ['./rhetos-rest.component.less'],
})
export class RhetosRestComponent implements OnInit {
  private search$ = new BehaviorSubject<string>('');
  private orderBy$ = new BehaviorSubject<keyof Common.Principal | null>(null);
  private principalService: EntityService<Common.Principal>;

  principals$: Observable<Common.Principal[]>;
  search = '';
  orderByOptions: string[];
  orderBy: keyof Common.Principal | null = null;
  principalMeta: StructureMetadata<Common.Principal>;

  constructor(private rhetosRest: RhetosRest, private rhetosMetadata: RhetosMetadata) {
    this.principalMeta = this.rhetosMetadata.for(Common.PrincipalInfo);
    this.principalService = this.rhetosRest.forEntity(Common.PrincipalInfo);
    this.orderByOptions = Object.keys(this.principalMeta.properties);
  }

  ngOnInit(): void {
    this.action();
    this.principals$ = combineLatest([this.search$.pipe(debounceTime(400)), this.orderBy$]).pipe(
      switchMap(([search, order]) =>
        this.principalService.records((query) => {
          if (order) {
            query.orderBy(order);
          }

          if (search !== '') {
            query.where('Name', 'Contains', search);
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

  insert() {
    const newPrincipal: Common.Principal = {
      ID: newGuid(),
      Name: 'testInsert',
    };

    const newPrincipal2 = createEntity(Common.PrincipalInfo, { Name: 'asdasd00000' });

    this.principalService.insert(newPrincipal);
    this.principalService.insert(newPrincipal2);
    this.principalService.insert({ Name: 'testInsert' });
  }

  update() {
    this.principalService
      .update({
        ID: '9F594B2D-3C6C-49E9-94A6-06130DE5C026',
        Name: 'asd',
      })
      .subscribe();
  }

  query() {
    this.principalService.recordsWithCount((query) =>
      query.take(10).skip(20).orderBy('Name').filterBy(Common.SmartSearchInfo, { Pattern: 'test' })
    );
  }

  action() {
    this.rhetosRest
      .forAction(Adresar.QuickInsertNaseljeInfo)
      .execute({
        NaseljeID: newGuid(),
        DrzavaID: 'B166A8CD-F699-4F2C-814E-04B0C51F0DD7',
        PostanskiBroj: '123',
        NazivMjesta: 'Mjesto',
      })
      .subscribe(console.log);
  }
}
