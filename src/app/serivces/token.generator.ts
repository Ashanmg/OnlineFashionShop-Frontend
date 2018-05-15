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
        // if (this.localStorageService.get('my-app.token') !== null) {
        //   request = request.clone({
        //     setHeaders: {
        //       Authorization: 'Bearer' + this.localStorageService.get('my-app.token')
        //     }
        //   });
        // }
        // return next.handle(request);

        const idToken = localStorage.getItem("my-app.token");
        console.log(idToken);

        if (idToken) {
            const cloned = request.clone({
                headers: request.headers.set("Authorization",
                    `Bearer ${idToken}`)
            });

            return next.handle(cloned);
        }
        else {
            // return next.handle(request);
            const cloned = request.clone({
              headers: request.headers.set("Authorization",
                  "Bearer " + "this is testing for set this header for all request")
            });

            return next.handle(cloned);
        }
      }
}
