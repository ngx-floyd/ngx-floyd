import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, delay, timeout } from 'rxjs/operators';
import { FloRhetosModule } from '../rhetos.module';
import { RHETOS_CONFIG, RhetosConfig } from './config';

export interface RequestData {
  method: HttpMethods;
  url: string;
  data?: unknown;
  params?: HttpParams;
}

export type HttpMethods = 'GET' | 'POST' | 'PUT' | 'DELETE';

@Injectable({ providedIn: FloRhetosModule })
export class RhetosRestService {
  protected _rootUrl: string;
  protected delete404OK: boolean;
  protected timeout: number;
  protected getDelay: number;
  protected saveDelay: number;

  constructor(@Inject(RHETOS_CONFIG) protected config: RhetosConfig, protected http: HttpClient) {
    this._rootUrl = config.url;

    const { delete404OK = true, getDelay = 0, saveDelay = 0, timeout: to = 0 } = config || {};
    this.delete404OK = delete404OK;
    this.getDelay = getDelay;
    this.saveDelay = saveDelay;
    this.timeout = to;
  }

  request<T>(
    key: string,
    method: HttpMethods,
    path?: string,
    data?: unknown,
    params?: HttpParams
  ): Observable<T> {
    const req: RequestData = {
      method,
      url: this.getStructureUrl(key, path),
      data,
      params,
    };
    let result$: Observable<T>;

    switch (req.method) {
      case 'GET':
        result$ = this.http.get<T>(req.url, { params });
        if (this.getDelay) {
          result$ = result$.pipe(delay(this.getDelay));
        }
        break;
      case 'POST':
        result$ = this.http.post<T>(req.url, data, { params });
        if (this.saveDelay) {
          result$ = result$.pipe(delay(this.saveDelay));
        }
        break;
      case 'PUT':
        result$ = this.http.put<T>(req.url, data, { params });
        if (this.saveDelay) {
          result$ = result$.pipe(delay(this.saveDelay));
        }
        break;
      case 'DELETE':
        result$ = this.http.delete<T>(req.url, { params });
        if (this.saveDelay) {
          result$ = result$.pipe(delay(this.saveDelay));
        }
        break;
      default: {
        result$ = throwError(
          new Error(`${method} http method not implemented for RhetosRestService.`)
        );
      }
    }
    if (this.timeout) {
      result$ = result$.pipe(timeout(this.timeout + this.saveDelay));
    }
    return result$.pipe(catchError<T, Observable<never>>(this.handleError(req)));
  }

  private handleError(reqData: RequestData): (err: HttpErrorResponse) => Observable<never> {
    return (err: HttpErrorResponse) => {
      console.log(err);
      const ok = this.handleDelete404(err, reqData);
      if (ok) {
        return ok as Observable<never>;
      }
      const error = new Error(err.message);
      return throwError(error);
    };
  }

  private handleDelete404(
    error: HttpErrorResponse,
    reqData: RequestData
  ): Observable<never | {}> | undefined {
    if (error.status === 400 && reqData.method === 'DELETE' && this.delete404OK) {
      return of({});
    }
    return undefined;
  }

  private getRestUrl(rootUrl: string): string {
    return (rootUrl.slice(-1) === '/' ? rootUrl : `${rootUrl}/`) + 'Rest/';
  }

  private getStructureUrl(key: string, path?: string): string {
    return this.getRestUrl(this._rootUrl) + key + '/' + (path ?? '');
  }
}
