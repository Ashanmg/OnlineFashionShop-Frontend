import { environment } from './../../environments/environment';
import { LocalStorageService } from 'angular-2-local-storage';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    loggedIn : boolean = false;
    /**
     */
    constructor(private localStorageService : LocalStorageService,
                private router : Router,
                private http : HttpClient,
                private route : ActivatedRoute) {
    }

    login(userdetails) {
        return this.http.post(environment.apiUrl +"user/login" , userdetails);
    }
    
    saveToken(token) {
        // save token to local storage
    }

    saveUserDate(userData) {
        // save user details
    }

    getLoggedInState() {    
        const token = this.localStorageService.get('token');
        console.log(token);
        if (token) {
         this.loggedIn = true;
        } else {
         this.loggedIn = false;
        }
        return this.loggedIn;
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
    
        this.loggedIn = false;
    }
}