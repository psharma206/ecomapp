import { Injectable, Injector } from '@angular/core';
import {
  HttpInterceptor, HttpHeaders, HttpResponse, HttpErrorResponse,
  HttpRequest, HttpHandler, HttpEvent, HttpClient
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators';
import { LocalStorageService } from 'angular-2-local-storage';
import { Router } from '@angular/router';
import { LoaderService } from '../services/spinner/loader.service';
import { MessageService } from '../services/toaster/message.service';
import { ConfigurationsetupService } from '../services/startup/configurationsetup.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
  private _localstorage;
  private _logService;
  private _loaderService;
  constructor(
    private http: HttpClient,
    private injector: Injector,
    private _localStorageService: LocalStorageService,
    private config: ConfigurationsetupService,
    private router: Router
  ) {
    this._loaderService = this.injector.get(LoaderService);
    this._logService = this.injector.get(MessageService);
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.endsWith('.json')) {
      this._loaderService.show();
    }

    const header = new HttpHeaders();
    const headerJson = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'bearer ' + this._localStorageService.get('session') as string,
      clientId: this._localStorageService.get('clientId') as string
    };
    const headersConfig = new HttpHeaders(headerJson);

    request = request.clone({
      headers: headersConfig
    });

    return next.handle(request).pipe(
      tap(ev => {
        if (ev.type !== 0 && !request.url.endsWith('.json')) {
          this._loaderService.hide();
          if (ev.type === 4 && ev['body'] !== undefined && ev['body'] !== null
            && ev['body'].errors !== undefined && ev['body'].errors !== null) {
            ev['body'].errors.forEach(err => {
              if (err.type === 2) {
                this._logService.Error(err.message, '');
              }
            });
          }
        } else if (ev.type === 2 && !request.url.endsWith('.json')) {
          this._logService.Error(ev);
        }
        

        if (ev instanceof HttpResponse) {
        }
      }, error => {
        if (error instanceof HttpErrorResponse) {
          if (error.url.indexOf('config.json') < 0) {
            // tslint:disable-next-line: no-shadowed-variable
            // const header: string = error.status + ': ' + error.statusText;
            try {
              if (error.error != null && !error.error.hasOwnProperty('message')) {
                const message = error.error.Message === undefined ? error.error : error.error.Message;
                this._loaderService.hide();
                this._logService.Error(message, '');
              } else {
                this._loaderService.hide();
              }
            } catch (ex) {
            }
          }
          if (error.status === 401) {
            this.router.navigate
              (['/logout'], { queryParams: { status: error.status } });
          } else if (error.status === 403) {
            this.router.navigate
              (['/forbidden'], { queryParams: { status: error.status, message: error.error.Message } });
          }
        }
      })
    );
  }


}
function SetCookie(cookieName, cookieValue, nDays) {
  var today = new Date();
  var expire = new Date();
  if (nDays == null || nDays == 0) nDays = 1;

  expire.setTime(today.getTime() + 3600000 * 24 * nDays);
  document.cookie = cookieName + "=" + escape(cookieValue)
    + ";path=/;expires=" + expire['toGMTString']();
}


