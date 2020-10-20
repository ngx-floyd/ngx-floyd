import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { TableComponent } from './table.component';

@NgModule({
  imports: [CommonModule, NzTableModule, ReactiveComponentModule],
  declarations: [TableComponent],
  exports: [TableComponent],
})
export class TableModule {}
