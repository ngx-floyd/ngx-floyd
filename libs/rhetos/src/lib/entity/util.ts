import { newGuid } from '@ngx-floyd/core';
import { Entity, Optional } from './interfaces';
import { StructureInfo } from '../structure/info';

export function createEntity<T extends Entity>(info: StructureInfo<T>, data: Optional<T, 'ID'>): T {
  return { ...data, ID: newGuid() } as T;
}
