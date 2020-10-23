import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RhetosModule } from '@ngx-floyd/rhetos';
import { TableModule } from '@ngx-floyd/table';
import { NzIconTestModule } from 'ng-zorro-antd/icon/testing';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { RhetosRestComponent } from './rhetos-rest/rhetos-rest.component';
import { TableComponent } from './table-test/table.component';

@NgModule({
  declarations: [AppComponent, RhetosRestComponent, TableComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RhetosModule.withConfig(environment.rhetos),
    ReactiveFormsModule,
    FormsModule,
    TableModule,
    NzIconTestModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TableComponent],
})
export class AppModule {}
