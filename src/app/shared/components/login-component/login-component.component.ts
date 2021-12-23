import { Component, OnInit } from '@angular/core';
import {user} from "../../models/user-class/user";
import {AuthServiceService} from "../../services/auth-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {

  constructor(private authService: AuthServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  user: user = {
    userName: '',
    password: ''
  }

  login() {
    if (this.user.userName && this.user.password) {
      this.authService.login(this.user.userName, this.user.password).subscribe(() => {
        this.router.navigateByUrl('/home');
      })
    }
  }

}
