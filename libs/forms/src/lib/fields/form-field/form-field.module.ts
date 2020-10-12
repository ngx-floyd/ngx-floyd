import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormlyModule } from '@ngx-formly/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormFieldWrapper } from './form-field.wrapper';

@NgModule({
  declarations: [FormFieldWrapper],
  imports: [
    CommonModule,
    NzFormModule,
    FormlyModule.forChild({
      wrappers: [
        {
          name: 'form-field',
          component: FormFieldWrapper,
        },
      ],
    }),
  ],
})
export class FloFormFieldModule {}
