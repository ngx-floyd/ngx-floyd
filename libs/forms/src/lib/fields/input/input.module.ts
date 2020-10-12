import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FloInputField } from './input.type';

@NgModule({
  declarations: [FloInputField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'input',
          component: FloInputField,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FloInputModule {}
