import { Injectable } from '@angular/core';
import { FloDatePickerFieldConfig } from './date-picker/interfaces';
import { FloInputFieldConfig } from './input/interfaces';
import { FloNumberFieldConfig } from './number/interfaces';
import { FloSwitchFieldConfig } from './switch/interfaces';

export type DSL<T> = Omit<T, 'type' | 'key'>;

@Injectable({ providedIn: 'root' })
export class FloFormFields {
  input(key: string, config?: DSL<FloInputFieldConfig>): FloInputFieldConfig {
    return { key, type: 'input', ...config };
  }

  number(key: string, config?: DSL<FloNumberFieldConfig>): FloNumberFieldConfig {
    return { key, type: 'number', ...config };
  }

  switch(key: string, config?: DSL<FloSwitchFieldConfig>): FloSwitchFieldConfig {
    return { key, type: 'switch', ...config };
  }

  datePicker(key: string, config?: DSL<FloDatePickerFieldConfig>): FloDatePickerFieldConfig {
    return { key, type: 'date-picker', ...config };
  }
}
