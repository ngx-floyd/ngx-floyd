export interface RowNode {
  id: string;
  index: number;
  data: any;
  selected: boolean;
}

export type RowNodeMap = { [id: string]: RowNode };
