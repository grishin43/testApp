import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../_services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  email: string;
  name: string;
  password: string;
  signAfter: boolean;
  loading = false;

  constructor(private userService: UserService) {
    this.registerForm = new FormGroup({
      email: new FormControl(this.email, [
        Validators.required,
        Validators.email
      ]),
      name: new FormControl(this.name, [
        Validators.required
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
    this.userService.signUp(this.registerForm.value, this.signAfter, () => {
      this.registerForm.reset();
      this.loading = false;
    }, (errorText) => {
      Swal.fire({
        title: 'Error!',
        text: errorText,
        icon: 'error',
        confirmButtonText: 'I got it',
        customClass: {
          confirmButton: 'button-default blue'
        }
      })
        .then(() => {
          this.loading = false;
        });
    });
  }

  get userEmail() {
    return this.registerForm.get('email');
  }

  get userName() {
    return this.registerForm.get('name');
  }

  get userPassword() {
    return this.registerForm.get('password');
  }

}
