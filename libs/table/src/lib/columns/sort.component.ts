import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FloTableSortOrder } from '../interfaces';

@Component({
  selector: 'flo-table-sort',
  template: `
    <span class="ant-table-column-sorter" [class.ant-table-column-sorter-full]="isDown && isUp">
      <!--      <span>1</span>-->
      <span class="ant-table-column-sorter-inner">
        <i
          nz-icon
          nzType="caret-up"
          *ngIf="isUp"
          class="ant-table-column-sorter-up"
          [class.active]="sortOrder == 'asc'"
        ></i>
        <i
          nz-icon
          nzType="caret-down"
          *ngIf="isDown"
          class="ant-table-column-sorter-down"
          [class.active]="sortOrder == 'desc'"
        ></i>
      </span>
    </span>
  `,
  styles: [
    `
      :host {
        display: flex;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloSortComponent implements OnInit, OnChanges {
  @Input() sortDirections: (FloTableSortOrder | null)[] = ['asc', 'desc', null];
  @Input() sortOrder: FloTableSortOrder | null = null;
  isUp = false;
  isDown = false;

  ngOnInit() {
    this.setDirections();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const { sortDirections } = changes;
    if (sortDirections) {
      this.setDirections();
    }
  }

  private setDirections() {
    this.isUp = this.sortDirections.indexOf('asc') !== -1;
    this.isDown = this.sortDirections.indexOf('desc') !== -1;
  }
}
