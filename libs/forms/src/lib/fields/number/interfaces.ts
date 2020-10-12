import { FloFieldConfig, FloFieldTemplateOptions } from '../interfaces';

export interface FloNumberFieldTemplateOptions extends FloFieldTemplateOptions {
  min?: number;
  max?: number;
  step?: number;
}

export interface FloNumberFieldConfig extends FloFieldConfig<FloNumberFieldTemplateOptions> {
  type?: 'number';
}
