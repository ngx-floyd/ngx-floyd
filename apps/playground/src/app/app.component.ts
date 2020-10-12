import { Component, OnInit } from '@angular/core';
import { EntityService, RhetosMetadata, RhetosRest } from '@ngx-floyd/rhetos';
import { FloFieldConfig, FloFormFields } from '@ngx-floyd/forms';
import { Observable } from 'rxjs';
import { Adresar } from './core/rhetos-model';

@Component({
  selector: 'ngx-floyd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit {
  private dostavnaPostaService: EntityService<Adresar.DostavnaPosta>;

  model$: Observable<Adresar.DostavnaPosta>;

  model = {};

  fields: FloFieldConfig[] = [
    this.floFields.input('name', {
      templateOptions: { label: 'Naziv', maxLength: 6, required: true },
    }),
    this.floFields.number('age', { templateOptions: { label: 'Godina', max: 120 } }),
    this.floFields.datePicker('date', { templateOptions: { label: 'Datum' } }),
    this.floFields.switch('active', { templateOptions: { label: 'Aktivan' } }),
  ];

  constructor(
    private rhetosRest: RhetosRest,
    private rhetosMetadata: RhetosMetadata,
    private floFields: FloFormFields
  ) {
    this.dostavnaPostaService = this.rhetosRest.forEntity(Adresar.DostavnaPostaInfo);
  }

  ngOnInit() {
    // this.model$ = this.dostavnaPostaService.single('D7120797-808C-47CF-8C6F-08E0095EAFDA');
  }

  onSubmit($event: Adresar.DostavnaPosta) {
    alert(JSON.stringify($event));

    // this.dostavnaPostaService.update($event).subscribe();
  }
}
