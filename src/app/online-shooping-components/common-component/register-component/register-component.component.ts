import { NgForm } from '@angular/forms';
import { UserRegister } from './../../../models/user_register';
import { UserService } from './../../../serivces/user.service';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.css']
})
export class RegisterComponentComponent implements OnInit {
  _userDetails: UserRegister;

  constructor(private userService: UserService,
              private toastr: ToastrService,
              private router: Router) { }

  ngOnInit() {
    this._userDetails = new UserRegister();
  }

  onSubmitRegister(register: NgForm) {
    this._userDetails.Active = 1;
    this._userDetails.CountryId = 1;
    console.log(this._userDetails);
    this.userService.userRegister(this._userDetails).subscribe(
      (data) => {
        if (data['Succeeded']) {
          this.toastr.success('User successfully registered');
          this.router.navigate(['/login']);
        } else {
          this.toastr.error(data['Message']);
        }
      }, (err) => {
        this.toastr.error('registration failed');
      }
    );
  }

}
