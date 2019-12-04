import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../_services/http.service';
import {User} from '../../_models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: User[] = [];

  constructor(
    private httpService: HttpService) {
  }

  ngOnInit() {
    this.httpService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }

}
