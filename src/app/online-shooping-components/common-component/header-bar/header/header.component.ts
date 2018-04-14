import { UserService } from './../../../../serivces/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbarCollapsed = true;
  loggedIn = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.loggedIn.subscribe(log => this.loggedIn = log);
  }

  UserLogin() {
    console.log('clicked login');
  }

  IsLoggedIn(event) {
    this.loggedIn = event;
    console.log(this.loggedIn);
  }

  Logout() {
    console.log('clicked logout');
    this.userService.logout();
  }
}
