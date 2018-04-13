import { environment } from './../../environments/environment';
import { LocalStorageService } from 'angular-2-local-storage';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
    loginResource = new BehaviorSubject<boolean>(false);
    loggedIn = this.loginResource.asObservable();
    /**
     */
    constructor(private localStorageService: LocalStorageService,
                private router: Router,
                private http: HttpClient,
                private route: ActivatedRoute) {
    }

    login(userdetails) {
        return this.http.post(environment.apiUrl + 'user/login' , userdetails);
    }

    saveToken(token) {
        // save token to local storage
        this.loginResource.next(true);
        this.localStorageService.set('token', token);
        const datetimeNow: number = new Date().getTime() / 1000 + token['expires_in'];
        this.localStorageService.set('tokenLifeTime', datetimeNow);
    }

    saveUserDate(userData) {
        // save user details
    }

    getLoggedInState(token) {
        if (token) {
         this.loginResource.next(true);
        } else {
         this.loginResource.next(false);
        }
    }

    logout() {
        this.localStorageService.remove('token');
        this.localStorageService.remove('tokenLifeTime');
        this.localStorageService.remove('inactivateTime');
        this.localStorageService.remove('userdata');

        const token = this.localStorageService.get('token');
        if (token) {
          // token still exist
         } else {
          console.log('logged out');
          this.router.navigate(['login']);
         }

        // this.loggedIn = false;
    }
}
