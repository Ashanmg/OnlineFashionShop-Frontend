import { environment } from './../../environments/environment';
import { LocalStorageService } from 'angular-2-local-storage';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    path : 'http://localhost:1862/api/user/login';
    loggedIn : false;
    /**
     */
    constructor(private localStorageService : LocalStorageService,
                private router : Router,
                private http : HttpClient,
                private route : ActivatedRoute) {
    }

    login(userdetails) {
        return this.http.post(this.path , JSON.stringify(userdetails)).map(response => <any>(<Response>response).json());
    }
    
    saveToken(token) {
        // save token to local storage
    }

    saveUserDate(userData) {
        // save user details
    }

    testing() {
        let path = 'user/test'
        return this.http.get(environment.apiUrl + path);
    }
    
}