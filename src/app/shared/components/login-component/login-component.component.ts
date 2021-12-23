import { Component, OnInit } from '@angular/core';
import {user} from "../../models/user-class/user";
import {AuthServiceService} from "../../services/auth-service.service";
import {Router} from "@angular/router";
import {error} from "../../models/error-class/error";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  constructor(private authService: AuthServiceService,
              private router: Router) { }

  ngOnInit(): void {
    if(this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/home').then(r => console.log('Redirect to home on refreshed session'));
    }
  }

  registeredUserName = '';

  user: user = {
    userName: '',
    password: ''
  }

  error: error = {
    status: false,
    message: '',
    getStatus: function(){
      return this.status;
    }
  }

  //User successfully logged in, navigate to home
  handleSuccessfulLogin() {
    this.error.status = false;
    this.error.message = '';
    this.router.navigateByUrl('/home');
  }

  login() {
    if (this.user.userName && this.user.password) {
      this.authService.login(this.user.userName, this.user.password).subscribe({
        next: value => this.handleSuccessfulLogin(),
        error: err => this.handleError(err),
      })
    }
  }

  //Handles both login and registration errors based on interface
  handleError(err: any) {
    console.log(err);
    this.error.status = true;
    this.error.message = err.error.message;
  }

  //User successfully registered, reset interface
  handleRegisterSuccess(){
    this.error.status = false;
    this.error.message = '';
    this.registeredUserName = this.user.userName;
  }

  //TODO - this way of doing subscribe with an observable is much cleaner and more convenient
  //TODO - refactor application to work this way
  register() {
    if (this.user.userName && this.user.password) {
      this.authService.register(this.user.userName, this.user.password).subscribe({
        next: value => this.handleRegisterSuccess(),
        error: err => this.handleError(err),
      })
      }
    }
}
