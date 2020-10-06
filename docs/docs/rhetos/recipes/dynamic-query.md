---
id: dynamic-query
title: Dynamic Query
slug: /rhetos/recipes/dynamic-query
---

Example of a simple list with a search field and order select input.  

TODO...

```typescript
@Component({
  selector: 'ngx-floyd-rhetos-rest',
  template: `
    <label>
      Search:
      <input name="search" [(ngModel)]="search" (ngModelChange)="onSearchInputChange()" />
    </label>
    <label>
      Order by:
      <select name="orderBy" [(ngModel)]="orderBy" (ngModelChange)="onOrderByChange()">
        <option></option>
        <option *ngFor="let order of orderByOptions" [value]="order">{{ order }}</option>
      </select>
    </label>
    <p>Principals:</p>
    <ul>
      <li *ngFor="let principal of principals$ | async">{{ principal.Name }}</li>
    </ul>
  `,
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

  ngOnInit() {
    this.principals$ = combineLatest([
      this.search$.pipe(debounceTime(400)), 
      this.orderBy$
    ]).pipe(
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
}

```
