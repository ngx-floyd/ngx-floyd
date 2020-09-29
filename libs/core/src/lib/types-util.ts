import { FloSafeAny } from './safe-any';

export function isNil(value: FloSafeAny): boolean {
  return value === undefined || value === null;
}

export function isDefined(value: FloSafeAny): boolean {
  return !isNil(value);
}

export function exists<T>(value?: T, allowEmptyString = false): boolean {
  return isDefined(value) && (allowEmptyString || (value as any) !== '');
}

export function isFunction(value: FloSafeAny) {
  return typeof value === 'function';
}

export function isObject(obj: FloSafeAny): boolean {
  return typeof obj === 'object' && obj !== null;
}

export function isEmptyObject(obj: FloSafeAny): boolean {
  return isObject(obj) && obj.keys.length > 0;
}

export function isArray(value: FloSafeAny): boolean {
  return Array.isArray(value);
}

export function isEmptyArray(value: FloSafeAny): boolean {
  return isArray(value) && value.length === 0;
}

export function isDate(value: FloSafeAny): boolean {
  return Object.prototype.toString.call(value) === '[object Date]';
}

export function toStringOrNull(value: any): string | null {
  return exists(value) && value.toString ? value.toString() : null;
}

export function areJsonEqual(x: FloSafeAny, y: FloSafeAny): boolean {
  return JSON.stringify(x) === JSON.stringify(y);
}
