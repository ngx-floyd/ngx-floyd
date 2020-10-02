import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, ModuleWithProviders, NgModule, Provider, Type } from '@angular/core';
import { RHETOS_CONFIG, RhetosConfig } from './core/config';
import { MsDateInterceptor } from './core/interceptors/ms-date';
import { NullToUndefinedInterceptor } from './core/interceptors/null-to-undefined';
import { RhetosWithCredentialsInterceptor } from './core/interceptors/with-credentials';
import { RhetosMetadata } from './core/metadata';

@NgModule({
  imports: [HttpClientModule],
})
export class RhetosModule {
  static withConfig(config: RhetosConfig): ModuleWithProviders<RhetosModule> {
    return {
      ngModule: RhetosModule,
      providers: createRhetosProviders(config),
    };
  }
}

export function createRhetosProviders(config: RhetosConfig): (Provider | Type<any>)[] {
  const providers: (Provider | Type<any>)[] = [];

  if (!config) {
    console.error('You need to provide a valid RhetosConfig.');
    return [];
  }

  providers.push({
    provide: RHETOS_CONFIG,
    useValue: config,
  });

  if (config.withCredentials) {
    providers.push({
      provide: HTTP_INTERCEPTORS,
      useClass: RhetosWithCredentialsInterceptor,
      multi: true,
    });
  }

  providers.push(RhetosMetadata);

  // TODO: metadata should be included in the bundle
  if (!config.suppressMetadataLoadOnAppInit) {
    providers.push({
      provide: APP_INITIALIZER,
      useFactory: loadMetadata,
      deps: [RhetosMetadata, RHETOS_CONFIG],
      multi: true,
    });
  }

  if (!config.suppressCoercedUndefined) {
    providers.push({
      provide: HTTP_INTERCEPTORS,
      useClass: NullToUndefinedInterceptor,
      multi: true,
    });
  }

  providers.push({
    provide: HTTP_INTERCEPTORS,
    useClass: MsDateInterceptor,
    multi: true,
  });

  return providers;
}

export function loadMetadata(metadataService: RhetosMetadata, config: RhetosConfig) {
  return function () {
    return metadataService.load().toPromise();
  };
}
