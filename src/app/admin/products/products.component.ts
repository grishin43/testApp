import {Component, OnInit} from '@angular/core';
import {products} from './products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  page = 1;
  list = products.list;
  categories = products.categories;
  publishers = products.publishers;
  publisherFilter = '';
  categoryFilter = '';

  constructor() {
  }

  ngOnInit() {

  }

  resetFilters() {
    this.publisherFilter = '';
    this.categoryFilter = '';
  }

}
