import { FloTableOptions } from '@ngx-floyd/table';
import { FloComponentStore } from '../core/component-store';

export class FloOptionsStore extends FloComponentStore<FloTableOptions> {
  // Getters
  getDataKey(): string | undefined {
    return 'ID';
  }

  isServerSide() {
    return true;
  }
}
//
// export class ComponentUtil {
//   static readonly initComponentState = (service: OptionsService, comp: FloTableComponent) => {
//     const options: FloTableOptions = {};
//     const keyExists = (key: keyof FloTableOptions) => typeof comp[key] !== 'undefined';
//
//     FLO_TABLE_OPTIONS_PROPERTIES.filter(keyExists).forEach((prop) => {
//       (options as FloSafeAny)[prop] = comp[prop];
//     });
//
//     service.setState({ ...createTableStateDefaults(), ...(comp.options ?? {}), ...options });
//   };
//
//   static readonly processComponentChanges = (service: OptionsService, changes: SimpleChanges) => {
//     const { options } = changes;
//
//     if (options && options.isFirstChange()) {
//     }
//
//     const optionsChanges: FloTableOptions = {};
//     const keyExists = (key: string) => changes[key];
//
//     FLO_TABLE_OPTIONS_PROPERTIES.filter(keyExists).forEach((prop) => {
//       (optionsChanges[prop] as FloSafeAny) = changes[prop].currentValue;
//     });
//
//     service.setState((state) => ({ ...state, ...optionsChanges }));
//   };
// }
