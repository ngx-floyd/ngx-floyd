import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FloFieldType } from '../interfaces';
import { FloNumberFieldConfig } from './interfaces';

@Component({
  selector: 'flo-number-field',
  template: `
    <nz-input-number
      [formControl]="formControl"
      [formlyAttributes]="field"
      [nzMin]="to?.min"
      [nzMax]="to?.max"
      [nzStep]="to?.step"
    ></nz-input-number>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloNumberField extends FloFieldType<FloNumberFieldConfig> {
  defaultOptions = {
    templateOptions: {
      min: -Infinity,
      max: Infinity,
      step: 1,
    },
  };
}
