import { UserService } from './../../../serivces/user.service';
import { Component, OnInit } from '@angular/core';
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
  
  _user :UserLogin;

  constructor(private router: Router,
    private toastr: ToastrService,
    private userService : UserService) 
    { }

  ngOnInit() {
    console.log("call to login");
    this._user = new UserLogin();
  }

  onSubmitLogin(login  : NgForm) {
    if(login.valid) {
      let user = {Id: 1, Username:'ashanmg9@gmail.com', Password:'zaq1xsw2!@#$', RememberMe:false}
      this.userService.testing().subscribe(
        (data) => {
          if(data) {
            this.toastr.success("loggin successfully");
          }else {
            this.toastr.error("login failed");
          }
        }, (err) => {
          console.log(err);
          this.toastr.error("login failed due to connection failiure");
        }
      );
    } else {
      this.toastr.error(" please fill the required fields");
      console.log("logged");
    }
  }

  userRegister() {
    this.router.navigate(['/register']);
  }

}
