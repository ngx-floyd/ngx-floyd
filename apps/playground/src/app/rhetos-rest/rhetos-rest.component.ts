import { Component, OnInit } from '@angular/core';
import { EntityService, QueryableService, RhetosRest } from '@ngx-floyd/rhetos';
import { Observable } from 'rxjs';
import { Adresar, EvidencijaPismena } from '../core/centrix-rhetos-model';

@Component({
  selector: 'ngx-floyd-rhetos-rest',
  templateUrl: './rhetos-rest.component.html',
  styleUrls: ['./rhetos-rest.component.less'],
})
export class RhetosRestComponent implements OnInit {
  private pismenoBrowseService: QueryableService<EvidencijaPismena.PismenoBrowse>;
  private fizickaOsobaService: EntityService<Adresar.FizickaOsoba>;

  pismena$: Observable<EvidencijaPismena.PismenoBrowse[]>;

  constructor(private rhetosRest: RhetosRest) {
    this.pismenoBrowseService = this.rhetosRest.forQueryable(EvidencijaPismena.PismenoBrowseInfo);
    this.fizickaOsobaService = this.rhetosRest.forEntity(Adresar.FizickaOsobaInfo);
  }

  ngOnInit(): void {
    this.getById();
    this.getAll();
    this.count();
    this.records();
    this.recordsAndCount();
  }

  // QUERYABLE
  getById() {
    this.pismenoBrowseService
      .getbyId('72f48f78-5c35-419f-991e-63a9fdb2d8c6')
      .subscribe(console.log);
  }

  getAll() {
    this.pismenoBrowseService.getAll().subscribe(console.log);
  }

  count() {
    this.pismenoBrowseService
      .count((query) => query.where('DatumStatusa', 'DateIn', '2018'))
      .subscribe(console.log);
  }

  recordsAndCount() {
    this.pismenoBrowseService.recordsWithCount((query) => query.take(10)).subscribe(console.log);
  }

  // ENTITY
  insert() {
    const osoba: Adresar.FizickaOsoba = {
      ID: 'nekiGuid',
      Ime: 'Hrvoje',
      Prezime: 'Test',
    };

    this.fizickaOsobaService.insert(osoba);
  }

  records() {}
}
