import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {RouteguardService} from './_services/routeguard.service';
import {AnonymousGuardService} from './_services/anonymous-guard.service';


const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch: 'full'},
  {path: 'login', canActivate: [AnonymousGuardService], component: LoginComponent},
  {path: 'register', canActivate: [AnonymousGuardService], component: RegisterComponent},
  {path: 'admin', canActivate: [RouteguardService], loadChildren: () => import(`./admin/admin.module`).then(m => m.AdminModule)},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
