import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FloFieldsModule } from './fields/fields.module';
import { FloFormComponent } from './form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormlyModule.forRoot({
      extras: {
        immutable: true,
      },
    }),
    FloFieldsModule,
    NzFormModule,
    ReactiveFormsModule,
  ],
  declarations: [FloFormComponent],
  exports: [FloFormComponent],
})
export class FloFormsModule {}
