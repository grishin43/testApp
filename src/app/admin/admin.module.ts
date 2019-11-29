import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {ProductsComponent} from './products/products.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from '../_pipes/filter.pipe';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  declarations: [
    AdminComponent,
    ProductsComponent,
    FilterPipe,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NgxPaginationModule,
    FormsModule,
    TranslateModule
  ]
})
export class AdminModule {
}
