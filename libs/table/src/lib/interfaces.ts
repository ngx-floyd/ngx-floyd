// Options
export interface FloTableOptions {
  serverSide?: boolean;
  selection?: FloTableSelection;
}

export type FloTableSize = 'tiny' | 'small' | 'default' | 'large' | 'huge';
export type FloTableSelection = 'single' | 'multiple';

// Columns
export interface FloColDef {
  field?: string;
  title?: string;
  width?: string;
}

// Query Params
export type FloTableSortOrder = 'asc' | 'desc';
export type FloTableSort = { field: string; order: FloTableSortOrder };

export interface FloTableFilterModel {
  [field: string]: {
    field: string;
    type: string;
    value: any;
  };
}

export interface FloTableQueryParams {
  pageIndex: number;
  pageSize: number;
  sortArray: FloTableSort[];
  filterModel: FloTableFilterModel;
}
