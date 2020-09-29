import { FloSafeAny } from './safe-any';
import { isDate } from './types-util';

export function deepMap(
  object: FloSafeAny,
  mapFn: (val: FloSafeAny, key: string | number | symbol) => FloSafeAny,
  context?: FloSafeAny
): FloSafeAny {
  if (Array.isArray(object)) {
    return object.map(function (val, key) {
      return val !== null && typeof val === 'object'
        ? deepMap(val, mapFn, context)
        : mapFn.call(context, val, key);
    });
  } else if (object !== null && typeof object === 'object') {
    const res: FloSafeAny = {};
    for (const key in object) {
      if (!object.hasOwnProperty(key)) continue;
      const val = object[key];
      if (val !== null && typeof val === 'object' && !isDate(val)) {
        res[key] = deepMap(val, mapFn, context);
      } else {
        res[key] = mapFn.call(context, val, key);
      }
    }
    return res;
  } else {
    return object;
  }
}
