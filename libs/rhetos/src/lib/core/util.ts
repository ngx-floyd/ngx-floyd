import { isObject } from '@ngx-floyd/core';
import { StructureInfo } from '../..';

export type InfoOrKey<T = unknown> = StructureInfo<T> | string;

export function getKey(infoOrKey: InfoOrKey) {
  return isObject(infoOrKey) ? (infoOrKey as StructureInfo).key : (infoOrKey as string);
}
