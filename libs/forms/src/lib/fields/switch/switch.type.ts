import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FloFieldType } from '../interfaces';
import { FloSwitchFieldConfig } from './interfaces';

@Component({
  selector: 'flo-switch-field',
  template: ` <nz-switch [formControl]="formControl" [formlyAttributes]="field"></nz-switch> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FloSwitchField extends FloFieldType<FloSwitchFieldConfig> {}
