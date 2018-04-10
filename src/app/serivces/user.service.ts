import { LocalStorageService } from 'angular-2-local-storage';
import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    /**
     */
    constructor(private localStorageService : LocalStorageService) {
    }

    login(userdetails) {
        // login post call here
    }
    
    saveToken(token) {
        // save token to local storage
    }

    saveUserDate(userData) {
        // save user details
    }
    
}