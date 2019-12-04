import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader, TranslateService, LangChangeEvent} from '@ngx-translate/core';
import {HttpService} from './_services/http.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {provide: TranslateLoader, useClass: HttpService}
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    public translate: TranslateService) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('en');
    const browserLang = localStorage.getItem('language') || translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      localStorage.setItem('language', translate.currentLang);
    });
  }
}
