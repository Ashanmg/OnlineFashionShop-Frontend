import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../serivces/product.service';
import { ToastrService } from 'ngx-toastr';
import { ProductDetail } from '../../../models/product_detail';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  queryParams: any;
  productDetails: any;
  quantity = 1;
  colourAttributes = [];
  sizeAttributes = [];

  constructor(private productService: ProductService,
    private toastrService: ToastrService,
    private route: ActivatedRoute,
    private router: Router) {
      this.productDetails = new  ProductDetail(0, 0, 0, '', 0, null, 0, 'PRODUCT_NAME', null, 0, 99.99, null, 0, '', 0, 0);
    }

  ngOnInit() {
    this.route.queryParams.subscribe(
      (params) => {
        this.queryParams = params;
      },
      (err) => {
        this.queryParams = [];
      }
    );
    this.getProductDetails();
  }

  getProductDetails() {
    console.log(this.queryParams['productId']);
    this.productService.getProductDetails(this.queryParams['productId']).subscribe (
      (data) => {
        console.log(data);
        if (data) {
          this.productDetails = data['singleProduct'];
          const attributeValues = data['attributeValue'];
          for (let i = 0; i < attributeValues.length; i++) {
            if (attributeValues[i].productAttributeId === 1) {
              this.colourAttributes.push(attributeValues[i]);
            }else if (attributeValues[i].productAttributeId === 2) {
              this.sizeAttributes.push(attributeValues[i]);
            }
          }
          // this.colourAttributes.sort();
          console.log(this.colourAttributes);
        } else {
          this.toastrService.warning('Product is not available. Check again');
        }
      },
      (err) => {
        this.toastrService.error('Unexpected error happened');
      }
    );
  }

  minusClicked() {
    console.log(this.quantity);
    if (this.quantity > 1) {
      this.quantity = this.quantity - 1;
    }
  }

  plusClicked() {
    console.log(this.quantity);
    if (this.quantity < 100) {
      this.quantity = this.quantity + 1;
    }
  }

  fiteredColour(id) {
    console.log(id);
  }

  filteredSize (id) {
    console.log(id);
  }

  addToCartClicked() {
    const idToken = localStorage.getItem('my-app.token');
    console.log('add to cart clicked');
    if (idToken) {
      console.log(idToken);
    }else {
      this.router.navigate(['/login']);
    }
  }
}
