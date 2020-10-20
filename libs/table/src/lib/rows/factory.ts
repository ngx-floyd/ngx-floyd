// import { Injectable } from '@angular/core';
// import { OptionsWrapper } from '../options/options-wrapper';
// import { RowNode } from './interfaces';
//
// @Injectable()
// export class RowNodeFactory {
//   private _cache = new Map<string, RowNode>();
//
//   constructor(private options: OptionsWrapper) {}
//
//   getRowNodes(data: any[]): RowNode[] {
//     return data.map((rowData, index) => this.getRowNode(rowData, index));
//   }
//
//   getRowNode(rowData: object, index: number): RowNode {
//     const rowId = this.getRowNodeId(rowData, index);
//     const fromCache = this.getRowNodeFromCache(rowId);
//
//     return fromCache && this.isEqualRowData(fromCache.data, rowData)
//       ? fromCache
//       : this.createRowNode(rowData, index);
//   }
//
//   updateInCache(rowId: string, rowNode: RowNode) {
//     this._cache.set(rowId, rowNode);
//   }
//
//   clearCache() {
//     this._cache.clear();
//   }
//
//   private getRowNodeFromCache(rowId: string): RowNode | undefined {
//     return this._cache.get(rowId);
//   }
//
//   private createRowNode(rowData: object, index: number) {
//     const rowNode: RowNode = {
//       id: this.getRowNodeId(rowData, index),
//       data: rowData,
//       index,
//       selected: false, // TODO: implement
//     };
//
//     if (this.options.isServerSide()) {
//       this._cache.set(rowNode.id, rowNode);
//     }
//
//     return rowNode;
//   }
//
//   private getRowNodeId(rowData: any, index: number): string {
//     const dataKey = this.options.getDataKey();
//     return dataKey ? rowData[dataKey] : index.toString();
//   }
//
//   private isEqualRowData(data1: object, data2: object) {
//     return JSON.stringify(data1) === JSON.stringify(data2);
//   }
// }
