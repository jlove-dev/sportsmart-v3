import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {AuthServiceService} from "../../services/auth-service.service";

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  constructor(private router: Router, public authService: AuthServiceService) { }

  ngOnInit(): void {
  }

  previousLocation = '';

  checkPreviousLocation() {
    if(this.previousLocation === '/sell-item'){
      return 'sales'
    } else if (this.previousLocation === '/add-item') {
      return 'dataEntry'
    } else {
      return 'home'
    }
  }

  checkLocation() {

    console.log('checking location');

    switch(this.router.url){

      case '/':
        this.previousLocation = '/';
        return 'home'

      case '/find-item':
        return this.checkPreviousLocation();

      case '/find-vendor':
        return this.checkPreviousLocation();

      case '/sell-item':
        this.previousLocation = '/sell-item';
        return 'sales';

      case '/add-item': //This falls through to add-seller
      case '/add-seller':
        this.previousLocation = '/add-item';
        return 'dataEntry';

      default:
        return 'home';
    }
  }

}
