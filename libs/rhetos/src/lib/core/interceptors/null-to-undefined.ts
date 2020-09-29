import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { deepMap } from '@ngx-floyd/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RHETOS_CONFIG, RhetosConfig } from '../config';

@Injectable()
export class NullToUndefinedInterceptor implements HttpInterceptor {
  constructor(@Inject(RHETOS_CONFIG) private config: RhetosConfig) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!req.url.startsWith(this.config.url)) return next.handle(req);

    return next.handle(req).pipe(
      map((event) =>
        event instanceof HttpResponse
          ? event.clone<unknown>({
              body: deepMap(event.body, (val) => {
                return val === null ? undefined : val;
              }),
            })
          : event
      )
    );
  }
}
