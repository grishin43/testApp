import {Component, OnInit} from '@angular/core';
import {UserService} from '../_services/user.service';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  routeTitle: string;
  user: any;
  sidebarOpen: boolean;
  menu = [
    {
      title: 'Dashboard',
      route: 'dashboard',
      icon_class: 'fa fa-tasks'
    },
    {
      title: 'Products',
      route: 'products',
      icon_class: 'fa fa-archive'
    },
  ];

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.routeTitle = this.getRouteTitle(event.url);
    });
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.sidebarOpen = false;
    this.routeTitle = this.getRouteTitle(this.router.url);
  }

  getRouteTitle(route) {
    return /[^/]*$/.exec(route)[0];
  }

}
