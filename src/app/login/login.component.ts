import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  login: string;
  password: string;
  loading = false;

  constructor(
    private userService: UserService
  ) {
    this.loginForm = new FormGroup({
      login: new FormControl(this.login, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(this.password, [
        Validators.required
      ])
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.loading = true;
    this.userService.signIn(this.loginForm.value, () => {
      this.loginForm.reset();
      this.loading = false;
    }, (error) => {
      alert(error);
    });
  }

  get userLogin() {
    return this.loginForm.get('login');
  }

  get userPassword() {
    return this.loginForm.get('password');
  }

}
