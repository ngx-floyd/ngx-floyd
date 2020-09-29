import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getKey, InfoOrKey } from '../core/util';
import { HttpMethods, RhetosRestService } from '../core/rest';

export abstract class StructureService {
  protected _key: string;

  constructor(protected infoOrKey: InfoOrKey, protected restService: RhetosRestService) {
    this._key = getKey(infoOrKey);
  }

  protected request<R>(
    method: HttpMethods,
    path?: string,
    data?: unknown,
    params?: HttpParams
  ): Observable<R> {
    return this.restService.request<R>(this._key, method, path, data, params);
  }
}
