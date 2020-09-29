import { Component, Injectable, OnInit } from '@angular/core';
import {
  RhetosRest,
  RhetosRestService,
  EntityService,
  QueryableService,
  ActionService,
  TemplaterReportService,
  RhetosQueryBuilder,
} from '@ngx-floyd/rhetos';
import { Adresar, EvidencijaPismena } from './core/centrix-rhetos-model';

@Component({
  selector: 'ngx-floyd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  private drzavaService: EntityService<Adresar.Drzava>;
  private pismenoBrowseService: QueryableService<EvidencijaPismena.PismenoBrowse>;
  private inserNaseljeService: ActionService<Adresar.QuickInsertNaselje>;
  private documentTemplatePismenoService: TemplaterReportService<
    EvidencijaPismena.DocumentTemplatePismeno
  >;

  constructor(private rhetosRest: RhetosRest) {
    this.pismenoBrowseService = this.rhetosRest.forQueryable(EvidencijaPismena.PismenoBrowseInfo);
    this.drzavaService = this.rhetosRest.forEntity(Adresar.DrzavaInfo);
    this.inserNaseljeService = this.rhetosRest.forAction(Adresar.QuickInsertNaseljeInfo);
    this.documentTemplatePismenoService = this.rhetosRest.forTemplaterReport(
      EvidencijaPismena.DocumentTemplatePismenoInfo
    );
  }

  ngOnInit() {}
}

@Injectable({ providedIn: 'root' })
export class PismenoEntityService extends EntityService<EvidencijaPismena.Pismeno> {
  constructor(private rhetosRest: RhetosRestService) {
    super(EvidencijaPismena.PismenoBrowseInfo.key, rhetosRest);
  }
}
