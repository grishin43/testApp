import {Injectable, Injector} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../_models/user';
import {Product} from '../_models/product';
import {map} from 'rxjs/operators';
import {TranslateLoader} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService implements TranslateLoader {

  constructor(
    private http: HttpClient,
    private injector: Injector) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get('./assets/json/users.json').pipe(map((data) => {
      return data['list'].map((user: any) => {
        return {email: user.email, name: user.name, password: user.password};
      });
    }));
  }

  getProducts(lang: string): Observable<Product[]> {
    return this.http.get(`./assets/json/translates/${lang}.json`).pipe(map((data) => {
      return data['admin'].products.list.map((product: any) => {
        return {
          id: product.id,
          image: product.image,
          name: product.name,
          author: product.author,
          publisher: product.publisher,
          publisherId: product.publisher_id,
          category: product.category,
          categoryId: product.category_id,
          pageCount: product.page_count,
          price: product.price,
          stock: product.stock
        };
      });
    }));
  }

  getTranslation(lang: string): Observable<any> {
    const http = this.injector.get(HttpClient);
    return http.get(`./assets/json/translates/${lang}.json`);
  }
}

