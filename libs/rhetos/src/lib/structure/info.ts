export interface StructureInfo<T = unknown> {
  path: string;
}

export function createStructureInfo<T>(path: string): StructureInfo<T> {
  return { path: path };
}
