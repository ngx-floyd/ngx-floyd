import { InjectionToken } from '@angular/core';

export interface RhetosConfig {
  url: string;
  withCredentials?: boolean;
  delete404OK?: boolean;
  timeout?: number;
  getDelay?: number;
  saveDelay?: number;
  suppressCoercedUndefined?: boolean;
  suppressMetadataLoadOnAppInit?: boolean;
}

export const rhetosConfigDefaults: Partial<RhetosConfig> = {};

export const RHETOS_CONFIG = new InjectionToken<RhetosConfig>('RHETOS_CONFIG');
