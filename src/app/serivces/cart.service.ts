import { Injectable } from "@angular/core";
import { LocalStorageService } from "angular-2-local-storage";
import { HttpClient } from "@angular/common/http";

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
