import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RhetosModule } from '@ngx-floyd/rhetos';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { RhetosRestComponent } from './rhetos-rest/rhetos-rest.component';

@NgModule({
  declarations: [AppComponent, RhetosRestComponent],
  imports: [
    BrowserModule,
    RhetosModule.withConfig(environment.rhetos),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
