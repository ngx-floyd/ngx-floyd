import { NgModule } from '@angular/core';
import { FloDatePickerModule } from './date-picker/date-picker.module';
import { FloFormFieldModule } from './form-field/form-field.module';
import { FloInputModule } from './input/input.module';
import { FloNumberModule } from './number/number.module';
import { FloSwitchModule } from './switch/switch.module';

@NgModule({
  declarations: [],
  imports: [
    FloFormFieldModule,
    FloInputModule,
    FloNumberModule,
    FloSwitchModule,
    FloDatePickerModule,
  ],
})
export class FloFieldsModule {}
