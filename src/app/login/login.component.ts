import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login: string;
  password: string;

  constructor() {
    this.loginForm = new FormGroup({
      'login': new FormControl(this.login, [
        Validators.required,
        Validators.email
      ]),
      'password': new FormControl(this.password, [
        Validators.required
      ])
    });
  }

  ngOnInit() {
  }

  get userLogin() {
    return this.loginForm.get('login');
  }

  get userPassword() {
    return this.loginForm.get('password');
  }

}
