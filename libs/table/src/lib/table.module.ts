import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { FloColumnComponent } from './columns/header-cell.component';
import { FloColumnResizeDirective } from './columns/resize.directive';
import { TableComponent } from './table.component';

@NgModule({
  imports: [CommonModule, NzTableModule, ReactiveComponentModule, NzIconModule],
  declarations: [TableComponent, FloColumnComponent, FloColumnResizeDirective],
  exports: [TableComponent],
})
export class TableModule {}
