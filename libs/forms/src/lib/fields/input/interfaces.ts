import { FloFieldConfig, FloFieldTemplateOptions } from '../interfaces';

export interface FloInputFieldTemplateOptions extends FloFieldTemplateOptions {
  minLength?: number;
  maxLength?: number;
  pattern?: string | RegExp;
}

export interface FloInputFieldConfig extends FloFieldConfig<FloInputFieldTemplateOptions> {
  type: 'input';
}
