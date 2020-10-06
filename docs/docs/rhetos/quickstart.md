---
id: quickstart
title: Quickstart
slug: /rhetos/quickstart
---

### 0. Setup Rhetos server
Make sure you have installed `Rhetos.FloydExtensions` nuget package in your Rhetos server application and setup your app for CORS requests correctly.  
  
You can find more information [here](https://dev.azure.com/omega-software-core/Rhetos/_git/FloydExtensions).   


### 1. Create a new project

The Angular CLI's new command will set up the latest Angular build in a new project structure.

```shell script
npx @angular/cli new <project-name>
cd <project-name>
```

### 2. Install packages

Now that you have a new project setup, install ***@ngx-floyd/core*** and ***@ngx-floyd/rhetos*** from npm.

```shell script
npm install @ngx-floyd/core @ngx-floyd/rhetos
```

### 3. Add RhetosConfig to environment

Open `/src/environments/environment.ts` and add your Rhetos configuration. 

```ts title="environment.ts" {5-8}
import { RhetosConfig } from '@ngx-floyd/rhetos';

export const environment = {
  production: false,
  rhetos: {
    url: 'http://localhost/Rhetos/', // your Rhetos root url
    withCredentials: true, // when using forms or windows authentication
  } as RhetosConfig,
};
```

### 4. Import RhetosModule

Open `/src/app/app.module.ts`, inject the Rhetos providers and specify your Rhetos configuration.


```ts title="app.module.ts" {12}
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

### 5. Inject RhetosRest

```ts title="app.component.ts" {10}
import { Component } from '@angular/core';
import { RhetosRest } from '@ngx-floyd/rhetos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private rhetosRest: RhetosRest) {
  
  }
}
```

### 6. Copy rhetos-model.ts

Copy `rhetos-model.ts` from your Rhetos server's folder with generated assets to `/src/app/`.

### 7. Create a request

Create a request using ***StructureInfo*** constant provided in the generated Rhetos model. Here we will fetch all principals as an example.

In `/src/app/app.component.ts`:



```ts title="app.component.ts" {15}
import { Component } from '@angular/core';
import { RhetosRest } from '@ngx-floyd/rhetos';
import { Observable } from 'rxjs';
import { Common } from './rhetos-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  principals$: Observable<Common.Principal[]>;

  constructor(private rhetosRest: RhetosRest) {
    this.principals$ = this.rhetosRest.forEntity(Common.PrincipalInfo).all();
  }
}
```

And in your template `/src/app/app.component.html`:

```html title="app.component.html"
<ul>
  <li *ngFor="let p of principals$ | async">
    {{p.Name}}
  </li>
</ul>
```

### 8. Run your app locally

```shell script
npm start
```

If everything went well you should see a list of principals from your Rhetos server.

