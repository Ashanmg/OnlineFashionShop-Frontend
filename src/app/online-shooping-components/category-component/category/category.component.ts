import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  group = [{Name: 'Formal', isOpen: false, list: [{Id: 1, Name: 'item1'}, {Id: 2, Name: 'item2'}, {Id: 3, Name: 'item3'}]},
  {Name: 'Casual', isOpen: false, list: [{Id: 4, Name: 'item1'}, {Id: 5, Name: 'item2'}, {Id: 6, Name: 'item3'}]},
  {Name: 'Sport', isOpen: false, list: [{Id: 7, Name: 'item1'}, {Id: 8, Name: 'item2'}, {Id: 9, Name: 'item3'}]},
  {Name: 'Child', isOpen: false, list: [{Id: 10, Name: 'item1'}, {Id: 11, Name: 'item2'}, {Id: 12, Name: 'item3'}]}];

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

  constructor() { }

  ngOnInit() {
  }

  onItemClicked(id: any) {
    console.log('clicked id is :' + id);
  }

  onCategoryClicked(item: any) {
    item.isOpen = !item.isOpen;
  }
}
