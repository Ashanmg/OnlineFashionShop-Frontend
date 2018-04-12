import { environment } from './../../environments/environment';
import { LocalStorageService } from 'angular-2-local-storage';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    loggedIn : false;
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
    
}