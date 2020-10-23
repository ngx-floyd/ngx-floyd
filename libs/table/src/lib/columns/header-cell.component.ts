import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FloColDef } from '../interfaces';

@Component({
  selector: 'flo-header-cell',
  template: `
    <div class="flo-table-header-cell" *ngIf="column as col">
      <div class="flo-table-header-cell-label-container">
        <!--        <div class="flo-table-header-cell-menu">-->
        <!--          <i nz-icon nzType="menu" nzTheme="outline"></i>-->
        <!--        </div>-->
        <div class="flo-table-header-cell-label">
          <span class="flo-table-header-cell-label-text">
            {{ col.title || col.field }}
          </span>
          <span class="flo-table-header-cell-label-filter" *ngIf="false">
            <i nz-icon nzType="filter" nzTheme="fill" style="font-size: 11px;"></i>
          </span>
          <span class="flo-table-header-cell-label-sort" *ngIf="true">
            <flo-tablee-sort [sortOrder]="'asc'"></flo-tablee-sort>
          </span>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloColumnComponent {
  @Input() column?: FloColDef;
}
