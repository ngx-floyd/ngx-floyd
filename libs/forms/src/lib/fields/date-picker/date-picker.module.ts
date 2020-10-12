import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FloDatePickerField } from './date-picker.type';

@NgModule({
  declarations: [FloDatePickerField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzSwitchModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'date-picker',
          component: FloDatePickerField,
          wrappers: ['form-field'],
        },
      ],
    }),
    NzDatePickerModule,
  ],
})
export class FloDatePickerModule {}
