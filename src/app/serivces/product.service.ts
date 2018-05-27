import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
    /**
     */
    constructor(private localStorageService: LocalStorageService,
                private http: HttpClient) {
    }

    getCategoryDetails() {
        return this.http.get(environment.apiUrl + 'product/category');
    }

    getProductDetails(productId) {
        return this.http.get(environment.apiUrl + 'product/singleproduct'
            , {params : {id: productId}});
    }

    isVariantProduct(productId) {
        return this.http.get(environment.apiUrl + 'product/checkvariant'
            , {params : {productId: productId}});
    }
}
