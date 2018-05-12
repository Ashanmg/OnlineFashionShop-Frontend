import { Injectable } from "@angular/core";
import { HttpClient } from "selenium-webdriver/http";
import { LocalStorageService } from "angular-2-local-storage";

@Injectable()
export class ShoppingCartService {

    /**
     *
     */
    constructor(private http: HttpClient,
                private localStorageService: LocalStorageService) {
        
    }

    getCartDetailOnLoggin() {

    }

    addToCartDetails() {
        
    }

}
