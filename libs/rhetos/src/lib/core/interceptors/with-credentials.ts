import { Inject, Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpInterceptor, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RHETOS_CONFIG, RhetosConfig } from '../config';

@Injectable()
export class RhetosWithCredentialsInterceptor implements HttpInterceptor {
  constructor(@Inject(RHETOS_CONFIG) private config: RhetosConfig) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (req.url.includes(this.config.url)) {
      req = req.clone({
        withCredentials: true,
      });
    }

    return next.handle(req);
  }
}
