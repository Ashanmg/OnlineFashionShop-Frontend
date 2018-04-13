import { UserService } from './../../../serivces/user.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserLogin } from '../../../models/user_login';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  _user: UserLogin;
  isLogin: boolean;

  constructor(private router: Router,
    private toastr: ToastrService,
    private userService: UserService) {
    }

  ngOnInit() {
    console.log('call to login');
    this._user = new UserLogin();
    this.userService.loggedIn.subscribe(log => this.isLogin = log);
  }

  onSubmitLogin(login: NgForm) {
    if (login.valid) {
      this.userService.login(this._user).subscribe(
        (data) => {
          console.log(data);
          if (data['succeeded']) {
            this.userService.getLoggedInState(true);
            this.saveToken(data['message']);
            this.toastr.success('Loggin successfully');
            this.router.navigate(['/home']);
          }else {
            this.userService.getLoggedInState(false);
            this.toastr.error('Your username password are incorrect !');
          }
        }, (err) => {
          console.log(err);
          this.userService.getLoggedInState(false);
          this.toastr.error('Login failed due to connection failiure');
        }
      );
    } else {
      this.toastr.error('please fill the required fields');
      console.log('logged');
    }
  }

  userRegister() {
    this.router.navigate(['/register']);
  }

  saveToken(token: string) {
    this.userService.saveToken(token);
  }

}
