import {Component, OnInit} from '@angular/core';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';
import {HttpService} from '../../_services/http.service';
import {Product} from '../../_models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  page = 1;
  publisherFilter = '';
  categoryFilter = '';
  categories: any;
  publishers: any;
  list: Product[] = [];

  constructor(
    private translate: TranslateService,
    private httpService: HttpService) {
  }

  ngOnInit() {
    this.setData();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setData();
    });
  }

  resetFilters() {
    this.publisherFilter = '';
    this.categoryFilter = '';
  }

  setData() {
    this.httpService.getProducts(this.translate.currentLang).subscribe((data) => {
      this.list = data;
    });
    this.httpService.getFilters(this.translate.currentLang).subscribe((data) => {
      this.categories = data.categories.list;
      this.publishers = data.publishers.list;
    });
  }
}
