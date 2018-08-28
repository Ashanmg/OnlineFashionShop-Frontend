import { ProductService } from './../../../serivces/product.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  group: any;
  products: any;
  totalCount: number;

  constructor(private productService: ProductService,
              private toastrService: ToastrService,
              private router: Router) { }

  ngOnInit() {
    this.getProductTypesWithCategoryShowProduct();

  }

  onItemClicked(id: any) {
    console.log('clicked id is :' + id);
  }

  onCategoryClicked(item: any) {
    item.isOpen = !item.isOpen;
    console.log(item.isOpen);
  }

  getProductTypesWithCategoryShowProduct() {
    this.productService.getCategoryDetails().subscribe(
      (data) => {
        this.totalCount = data['productList'].length;
        if (data['parentList']) {
          this.group = data['parentList'];
          this.products = data['productList'];
        }
      },
      err => {
        this.toastrService.error('Unexpected error happpened.');
      }
    );
  }

  addToCart(product) {
    console.log(product);
    this.productService.isVariantProduct(product.id).subscribe(
      (data) => {
        if (data) {
          console.log(data);
          // send to product view page
          this.router.navigate(['/product'], { queryParams: { productId: product.id } });
        } else {
          // add to cart only on single item and update cart count
        }
      },
      (err) => {
        this.toastrService.error('Unexpected error happened. Please try in few minutes');
      }
    );
  }
}
