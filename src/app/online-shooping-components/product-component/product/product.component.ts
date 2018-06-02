import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../serivces/product.service';
import { ToastrService } from 'ngx-toastr';
import { ProductDetail } from '../../../models/product_detail';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  queryParams: any;
  productDetails: any;
  quantity = 1;
  colourAttributes: any;

  constructor(private productService: ProductService,
    private toastrService: ToastrService,
    private route: ActivatedRoute) {
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
          if (data['attributeValue']) {
            this.colourAttributes = [{'id': '1', 'name': 'Black'}, {'id': '2', 'name': 'White'}, {'id': '3', 'name': 'Blue'}];
          }
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

}
