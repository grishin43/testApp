import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  currentRoute: string;
  user: any;
  sidebarOpen: boolean;
  menu = [
    {
      title: 'Products',
      route: '/admin',
      icon_class: 'fa fa-archive'
    }
  ];

  constructor(
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.sidebarOpen = true;
    this.currentRoute = this.router.url;
  }

}
