import { FloFieldConfig, FloFieldTemplateOptions } from '../interfaces';

// tslint:disable-next-line:no-empty-interface
export interface FloSwitchFieldTemplateOptions extends FloFieldTemplateOptions {}

export interface FloSwitchFieldConfig extends FloFieldConfig<FloSwitchFieldTemplateOptions> {
  type: 'switch';
}
