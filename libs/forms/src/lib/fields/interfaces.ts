import { FormControl } from '@angular/forms';
import { FloSafeAny } from '@ngx-floyd/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyAttributeEvent } from '@ngx-formly/core/lib/components/formly.field.config';

export interface FloFieldConfig<T extends FloFieldTemplateOptions = FloSafeAny>
  extends FormlyFieldConfig {
  templateOptions?: T;
}

// tslint:disable-next-line:no-empty-interface
export interface FloFieldTemplateOptions {
  // type?: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  // options?: any[] | Observable<any[]>;
  // rows?: number;
  // cols?: number;
  description?: string;
  hidden?: boolean;
  // max?: number;
  // min?: number;
  // minLength?: number;
  // maxLength?: number;
  // pattern?: string | RegExp;
  required?: boolean;
  tabindex?: number;
  readonly?: boolean;
  attributes?: {
    [key: string]: string | number;
  };
  // step?: number;
  focus?: FormlyAttributeEvent;
  blur?: FormlyAttributeEvent;
  keyup?: FormlyAttributeEvent;
  keydown?: FormlyAttributeEvent;
  click?: FormlyAttributeEvent;
  change?: FormlyAttributeEvent;
  keypress?: FormlyAttributeEvent;
  // templateManipulators?: TemplateManipulators;
}

export class FloFieldType<T extends FloFieldConfig> extends FieldType<T> {
  formControl!: FormControl;
}
