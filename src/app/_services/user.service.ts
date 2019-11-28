import {Injectable} from '@angular/core';
import {users} from '../users';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersArr = users;

  constructor(private router: Router) {
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
        errorCb(`User with email ${userData.email} already exist`);
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
        errorCb('Email or password is incorrect');
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

}
