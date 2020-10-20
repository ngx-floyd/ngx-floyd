import { Injectable } from '@angular/core';
import { RowNode } from './interfaces';
import { FloRowStore } from './store';

@Injectable()
export class FloRowService {
  constructor(private rowStore: FloRowStore) {}

  rows$ = this.rowStore.rows$;

  processData(data: any[]) {
    this.rowStore.processData(data);
  }

  getRowNode(rowId: string): RowNode | undefined {
    return this.rowStore.getRow(rowId);
  }

  // getSelectedRowNodes(): RowNode[] {
  //
  // }

  setRowSelected(rowId: string, selected: boolean = true): void {
    this.rowStore.updateRow(rowId, { selected });
  }

  updateRow(rowId: string, update: Partial<RowNode>): void {
    this.rowStore.updateRow(rowId, update);
  }
}
