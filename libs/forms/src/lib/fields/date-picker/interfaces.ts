import { FloFieldConfig, FloFieldTemplateOptions } from '../interfaces';

export interface FloDatePickerFieldTemplateOptions extends FloFieldTemplateOptions {
  minLength?: number;
  maxLength?: number;
  pattern?: string | RegExp;
}

export interface FloDatePickerFieldConfig
  extends FloFieldConfig<FloDatePickerFieldTemplateOptions> {
  type: 'date-picker';
}
