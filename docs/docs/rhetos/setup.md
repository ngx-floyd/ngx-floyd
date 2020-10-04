---
id: setup
title: Setup
slug: /rhetos/setup
---
First you need to add `RhetosConfig` to environments variable.

```ts title="environment.ts" {5-8}
import { RhetosConfig } from '@ngx-floyd/rhetos';

export const environment = {
  production: false,
  rhetos: {
    url: 'http://localhost/Rhetos/',
    withCredentials: true, // when using forms or windows authentication
  } as RhetosConfig,
};
```

Import `RhetosModule` providing `RhetosConfig` from environment.

```typescript title="app.module.ts" {12}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RhetosModule } from '@ngx-floyd/rhetos';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RhetosModule.withConfig(environment.rhetos),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
