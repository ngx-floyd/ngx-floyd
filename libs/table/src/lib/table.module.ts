import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveComponentModule } from '@ngrx/component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { FloColumnComponent } from './columns/header-cell.component';
import { FloColumnResizeDirective } from './columns/resize.directive';
import { FloSortComponent } from './columns/sort.component';
import { PaginationComponent } from './paginator/pagination.component';
import { TableComponent } from './table.component';

@NgModule({
  imports: [
    CommonModule,
    NzTableModule,
    ReactiveComponentModule,
    NzIconModule,
    NzButtonModule,
    NzToolTipModule,
    NzTypographyModule,
    NzSelectModule,
    FormsModule,
    NzInputModule,
  ],
  declarations: [
    TableComponent,
    FloColumnComponent,
    FloSortComponent,
    PaginationComponent,
    FloColumnResizeDirective,
  ],
  exports: [TableComponent],
})
export class TableModule {}
