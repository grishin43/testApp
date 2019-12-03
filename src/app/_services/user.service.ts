import {Injectable} from '@angular/core';
import {users} from '../users';
import {Router} from '@angular/router';
import {LangChangeEvent, TranslateService} from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersArr = users;
  alert: any;

  constructor(
    private router: Router,
    private translate: TranslateService) {
    this.setTranslates();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.setTranslates();
    });
  }

  signUp(userData, routeTrigger, successCb, errorCb) {
    if (!this.findUserByEmail(userData.email)) {
      this.usersArr.push(userData);
      if (routeTrigger) {
        this.signIn(userData, null, null);
      } else {
        this.router.navigate(['/login']);
      }
      if (typeof successCb === 'function') {
        successCb();
      }
    } else {
      if (typeof errorCb === 'function') {
        errorCb(this.alert.register);
      }
    }
  }

  signIn(userData, successCb, errorCb) {
    const currentUser = this.findUserByEmail(userData.login || userData.email);
    if (currentUser && currentUser.password === userData.password) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      this.router.navigate(['/admin']);
      if (typeof successCb === 'function') {
        successCb();
      }
    } else {
      if (typeof errorCb === 'function') {
        errorCb(this.alert.login);
      }
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  findUserByEmail(email) {
    return this.usersArr.find(user => user.email === email);
  }

  setTranslates() {
    this.translate.get('error').subscribe((res: any) => {
      this.alert = res;
    });
  }

}
