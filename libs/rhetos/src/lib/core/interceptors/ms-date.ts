import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { deepMap, isDate } from '@ngx-floyd/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { RHETOS_CONFIG, RhetosConfig } from '../config';
import { DateUtil } from '../date-util';

@Injectable()
export class MsDateInterceptor implements HttpInterceptor {
  constructor(@Inject(RHETOS_CONFIG) private config: RhetosConfig) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const cloneReq = req.clone({
      body: deepMap(req.body, (val) => (isDate(val) ? DateUtil.jsToMsDate(val) : val)),
    });

    return next.handle(cloneReq).pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
          return event.clone<unknown>({
            body: deepMap(event.body, (val) => {
              return typeof val === 'string' && DateUtil.isMsDate(val)
                ? DateUtil.msToJsDate(val)
                : val;
            }),
          });
        }
        return event;
      })
    );
  }
}
