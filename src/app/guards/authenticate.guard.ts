import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from 'angular-2-local-storage';
import { UserService } from './../serivces/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthenticateGuard implements CanActivate {
    /**
     *
     */
    constructor(private router: Router,
                private userService: UserService,
                private localStorageService: LocalStorageService) {

    }

    canActivate(
    ): Observable<boolean> | Promise<boolean> | boolean {
        let thisState = false; // this.userService.getLoggedInState();
        this.userService.loggedIn.subscribe(log => thisState = log);
        const datetimeNow: number  = new Date().getTime() / 1000;

        if (thisState === false) {
          this.userService.logout();
          return false;
        }

        if (this.localStorageService.get('currentUrl')) {
          this.router.navigate([this.localStorageService.get('currentUrl')],
          {
            queryParams: this.localStorageService.get('urlParams')
          });
          this.localStorageService.remove('currentUrl');
        }
        return thisState;
    }
}
