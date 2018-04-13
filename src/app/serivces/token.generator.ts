import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
  } from '@angular/common/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenGenrator implements HttpInterceptor {
    /**
     *
     */
    constructor(private localStorageService: LocalStorageService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.localStorageService.get('token') !== null) {
          request = request.clone({
            setHeaders: {
              Authorization: `Bearer ${this.localStorageService.get('token')['access_token']}`
            }
          });
        }
        return next.handle(request);
      }
}
