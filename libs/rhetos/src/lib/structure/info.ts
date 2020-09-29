export interface StructureInfo<T = unknown> {
  key: string;
}

export function createStructureInfo<T>(key: string): StructureInfo<T> {
  return { key };
}
