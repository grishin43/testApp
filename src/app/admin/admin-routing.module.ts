import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AdminComponent} from './admin.component';
import {ProductsComponent} from './products/products.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      {
        path: 'products', component: ProductsComponent
      },
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: '', redirectTo: 'products', pathMatch: 'full'
      },
      {
        path: '**', redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
