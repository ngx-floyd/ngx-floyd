import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FloFieldType } from '../interfaces';
import { FloDatePickerFieldConfig } from './interfaces';

@Component({
  selector: 'flo-switch-field',
  template: ` <nz-date-picker
    [formControl]="formControl"
    [formlyAttributes]="field"
    [nzPlaceHolder]="to?.placeholder"
  ></nz-date-picker>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloDatePickerField extends FloFieldType<FloDatePickerFieldConfig> {}
