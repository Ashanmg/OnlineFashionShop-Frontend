import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log("call to login");
  }

  userRegister() {
    this.router.navigate(['/register']);
  }

}
