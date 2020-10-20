import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { FloComponentStore } from '../core/component-store';
import { FloOptionsStore } from '../options/options.store';
import { RowNode, RowNodeMap } from './interfaces';

export interface RowsState {
  rowsMap: RowNodeMap;
  rowIds: string[];
  rowsCache: RowNodeMap;
}

export const createDefaultRowsState = (): RowsState => ({ rowsMap: {}, rowIds: [], rowsCache: {} });

@Injectable()
export class FloRowStore extends FloComponentStore<RowsState> {
  private rowsMap$ = this.select((s) => s.rowsMap);
  private rowIds$ = this.select((s) => s.rowIds);

  constructor(private options: FloOptionsStore) {
    super(createDefaultRowsState());
  }

  // Selectors
  rows$ = this.select(this.rowsMap$, this.rowIds$, (rMap, rIds) => rIds.map((id) => rMap[id]), {
    debounce: true,
  });

  getRow(rowId: string) {
    return { ...this.get().rowsMap, ...this.get().rowsCache }[rowId];
  }

  // Updaters
  readonly loadData = this.updater((state, data: any[]) => {
    if (!this.options.isServerSide()) {
      this.clearCache();
    }
    const rows = this.getRowNodes(data);
    return { ...state, ...getRowsStateObjects(rows) };
  });

  processData(data: any[]) {
    if (!this.options.isServerSide()) {
      this.clearCache();
    }

    const rows = this.getRowNodes(data);
    this.setState((state) => ({ ...state, ...getRowsStateObjects(rows) }));
  }

  getRowNodes(data: any[]): RowNode[] {
    return data.map((rowData, index) => this.getRowNode(rowData, index));
  }

  getRowNode(rowData: object, index: number): RowNode {
    const rowId = this.getRowNodeId(rowData, index);
    const fromCache = this.getRowNodeFromCache(rowId);

    return fromCache && this.isEqualRowData(fromCache.data, rowData)
      ? fromCache
      : this.buildRowNode(rowData, index);
  }

  updateRow(rowId: string, update: Partial<RowNode>) {
    const updated = { ...this.get().rowsMap[rowId], ...update };

    this.updateInCache(rowId, updated);

    this.updateState((draft) => {
      draft.rowsMap[rowId] = updated;
    });
  }

  private buildRowNode(rowData: object, index: number) {
    const rowNode: RowNode = {
      id: this.getRowNodeId(rowData, index),
      data: rowData,
      index,
      selected: false, // TODO: implement
    };

    if (this.options.isServerSide()) {
      this.updateInCache(rowNode.id, rowNode);
    }

    return rowNode;
  }

  private getRowNodeFromCache(rowId: string): RowNode | undefined {
    return this.get().rowsCache[rowId];
  }

  private updateInCache(rowId: string, rowNode: RowNode) {
    this.setState((state) => ({ ...state, rowsCache: { ...state.rowsCache, [rowId]: rowNode } }));
  }

  private clearCache() {
    this.setState((state) => ({ ...state, rowsCache: {} }));
  }

  private getRowNodeId(rowData: any, index: number): string {
    const dataKey = this.options.getDataKey();
    return dataKey ? rowData[dataKey] : index.toString();
  }

  private isEqualRowData(data1: object, data2: object) {
    return JSON.stringify(data1) === JSON.stringify(data2);
  }
}

export function getRowsStateObjects(rows: RowNode[]): { rowsMap: RowNodeMap; rowIds: string[] } {
  const rowIds = rows.map((r) => r.id);
  const rowsMap: RowNodeMap = {};

  rows.forEach((row) => (rowsMap[row.id] = row));

  return { rowsMap, rowIds };
}
