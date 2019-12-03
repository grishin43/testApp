import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../_services/http.service';
import {User} from '../../_models/user';
import {Product} from '../../_models/product';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: User[] = [];
  products: Product[] = [];

  constructor(
    private httpService: HttpService,
    private translate: TranslateService) {
  }

  ngOnInit() {
    this.httpService.getUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });
    this.httpService.getProducts(this.translate.currentLang).subscribe((data) => {
      this.products = data;
      console.log(this.products);
    });
  }

}
