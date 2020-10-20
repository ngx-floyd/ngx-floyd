// import { Injectable } from '@angular/core';
// import { tap } from 'rxjs/operators';
// import { FloComponentStore } from '../core/component-store';
// import { OptionsWrapper } from '../options/options-wrapper';
// import { RowNodeFactory } from './factory';
// import { RowNode, RowNodeMap } from './interfaces';
//
// export interface RowsState {
//   rowsMap: RowNodeMap;
//   rowIds: string[];
// }
//
// export const createDefaultRowsState = (): RowsState => ({ rowsMap: {}, rowIds: [] });
//
// @Injectable()
// export class RowStore extends FloComponentStore<RowsState> {
//   private rowsMap$ = this.select((s) => s.rowsMap);
//   private rowIds$ = this.select((s) => s.rowIds);
//
//   constructor(private rowsFactory: RowNodeFactory, private options: OptionsWrapper) {
//     super(createDefaultRowsState());
//   }
//
//   // Selectors
//   rows$ = this.select(this.rowsMap$, this.rowIds$, (rMap, rIds) => rIds.map((id) => rMap[id]), {
//     debounce: true,
//   }).pipe(tap(console.log));
//
//   // Updaters
//   processData(data: any[]) {
//     var t0 = performance.now();
//
//     const rows = this.rowsFactory.getRowNodes(data);
//
//     var t1 = performance.now();
//     console.log('Call to doSomething took ' + (t1 - t0) + ' milliseconds.');
//
//     this.setState((state) => ({ ...state, ...getRowsStateObjects(rows) }));
//   }
//
//   updateRow(rowId: string, update: Partial<RowNode>) {
//     const updated = { ...this.get().rowsMap[rowId], ...update };
//
//     this.rowsFactory.updateInCache(rowId, updated);
//
//     this.updateState((draft) => {
//       draft.rowsMap[rowId] = updated;
//     });
//   }
// }
//
// export function getRowsStateObjects(rows: RowNode[]): { rowsMap: RowNodeMap; rowIds: string[] } {
//   const rowIds = rows.map((r) => r.id);
//   const rowsMap: RowNodeMap = {};
//
//   rows.forEach((row) => (rowsMap[row.id] = row));
//
//   return { rowsMap, rowIds };
// }
