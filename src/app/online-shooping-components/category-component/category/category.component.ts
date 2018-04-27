import { ProductService } from './../../../serivces/product.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  group = [];

  products = [
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:quotemark
    {Title: 'Product title', Description: "Some quick example text to build on the card title and make up the bulk of the card's content.", Price: '99.00 $'},
    // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:quotemark
    {Title: 'Product title', Description: "Some quick example text to build on the card title and make up the bulk of the card's content.", Price: '99.00 $'},
        // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:quotemark
    {Title: 'Product title', Description: "Some quick example text to build on the card title and make up the bulk of the card's content.", Price: '99.00 $'},
        // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:quotemark
    {Title: 'Product title', Description: "Some quick example text to build on the card title and make up the bulk of the card's content.", Price: '99.00 $'},
        // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:quotemark
    {Title: 'Product title', Description: "Some quick example text to build on the card title and make up the bulk of the card's content.", Price: '99.00 $'},
        // tslint:disable-next-line:max-line-length
    // tslint:disable-next-line:quotemark
    {Title: 'Product title', Description: "Some quick example text to build on the card title and make up the bulk of the card's content.", Price: '99.00 $'}];

  constructor(private productService: ProductService,
              private toastrService: ToastrService) { }

  ngOnInit() {
    this.getProductTypesWithCategoryShowProduct();
  }

  onItemClicked(id: any) {
    console.log('clicked id is :' + id);
  }

  onCategoryClicked(item: any) {
    item.isOpen = !item.isOpen;
  }

  getProductTypesWithCategoryShowProduct() {
    this.productService.getCategoryDetails().subscribe(
      (data) => {
        console.log(data);
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
}
