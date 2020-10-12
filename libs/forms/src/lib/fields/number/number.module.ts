import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { FloNumberField } from './number.type';

@NgModule({
  declarations: [FloNumberField],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NzInputNumberModule,
    FormlyModule.forChild({
      types: [
        {
          name: 'number',
          component: FloNumberField,
          wrappers: ['form-field'],
        },
      ],
    }),
  ],
})
export class FloNumberModule {}
