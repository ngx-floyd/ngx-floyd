import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FloFormsModule } from '@ngx-floyd/forms';
import { RhetosModule } from '@ngx-floyd/rhetos';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { RhetosRestComponent } from './rhetos-rest/rhetos-rest.component';

/** config angular i18n **/
import { registerLocaleData } from '@angular/common';
import hr from '@angular/common/locales/hr';
registerLocaleData(hr);

/** config ng-zorro-antd i18n **/
import { NZ_I18N, hr_HR } from 'ng-zorro-antd/i18n';

@NgModule({
  declarations: [AppComponent, RhetosRestComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RhetosModule.withConfig(environment.rhetos),
    ReactiveFormsModule,
    FormsModule,
    FloFormsModule,
    NzTabsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: hr_HR }],
  bootstrap: [AppComponent],
})
export class AppModule {}
