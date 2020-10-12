import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FloSwitchField } from './switch.type';

@NgModule({
  declarations: [FloSwitchField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzSwitchModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'switch',
          component: FloSwitchField,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FloSwitchModule {}
