import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FloFieldType } from '../interfaces';
import { FloInputFieldConfig } from './interfaces';

@Component({
  selector: 'flo-input-field',
  template: `
    <input
      nz-input
      [formControl]="formControl"
      [type]="to.type || 'text'"
      [formlyAttributes]="field"
    />
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloInputField extends FloFieldType<FloInputFieldConfig> {}
