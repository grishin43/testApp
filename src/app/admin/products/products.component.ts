import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {products} from './products';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';

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

  constructor(private translate: TranslateService) {
    this.setTranslates();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setTranslates();
    });
  }

  ngOnInit() {
  }

  resetFilters() {
    this.publisherFilter = '';
    this.categoryFilter = '';
  }

  setTranslates() {
    this.translate.get('admin.products.filters.categories.list').subscribe((res: any) => {
      this.categories = res;
    });
    this.translate.get('admin.products.list').subscribe((res: any) => {
      this.list = res;
    });
  }
}
