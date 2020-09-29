import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { FloSafeAny } from '@ngx-floyd/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RHETOS_CONFIG, RhetosConfig } from './config';
import { StructureInfo } from '../structure/info';

export interface StructureMetadataMap {
  [key: string]: StructureMetadata;
}

export interface StructureMetadata<T = FloSafeAny> {
  key: string;
  serviceType?: string;
  hasReadRowPermissions?: boolean;
  properties: { [key in keyof T]: PropertyMetadata };
}

export interface PropertyMetadata {
  type: string;
  required?: boolean;
  referenceKey?: string;
  minValue?: string | number;
  maxValue?: string | number;
  minLength?: number;
  maxLength?: number;
  regex?: {
    expression: string;
    message: string;
  };
}

@Injectable()
export class RhetosMetadataService {
  private _cache = new Map<string, StructureMetadata>();
  private _url: string;

  constructor(@Inject(RHETOS_CONFIG) private config: RhetosConfig, private http: HttpClient) {
    this._url = config.url;
  }

  get<T>(infoOrKey: StructureInfo<T> | string): StructureMetadata<T> {
    const key = typeof infoOrKey === 'string' ? infoOrKey : infoOrKey.key;

    return this._cache.get(key) as StructureMetadata;
  }

  loadFromServer(): Observable<void> {
    this.clear();
    const url = this._url + 'Rest/Common/GetStructureMetadata/';
    return this.http.post<{ Value: string }>(url, {}).pipe(
      map((res) => {
        const parsedMap = this.parseResponseToJson(res);
        Object.keys(parsedMap).forEach((key) => {
          this._cache.set(key, {
            ...defaultStructureMetadata,
            ...JSON.parse(parsedMap[key]),
          });
        });
      })
    );
  }

  getAll(): Array<{ key: string; meta: StructureMetadata }> {
    return Array.from(this._cache.entries()).map((m) => ({
      key: m[0],
      meta: m[1],
    }));
  }

  clear(): void {
    this._cache.clear();
  }

  // noinspection JSMethodCanBeStatic
  private parseResponseToJson(res: { Value: string }) {
    return JSON.parse(res.Value);
  }
}

export const defaultStructureMetadata: Partial<StructureMetadata> = {};
