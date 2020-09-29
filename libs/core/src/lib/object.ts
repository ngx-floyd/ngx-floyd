import { FloSafeAny } from './safe-any';

export function cleanObject<T>(obj: T): Partial<T> {
  return Object.keys(obj).reduce((acc: FloSafeAny, key) => {
    if ((obj as FloSafeAny)[key] !== undefined) acc[key] = (obj as FloSafeAny)[key];
    return acc;
  }, {});
}
