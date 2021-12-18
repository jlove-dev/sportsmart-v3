import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  previousLocation = '';

  //FIXME - this being called many times, why?
  checkLocation(){
    //Determine the current route used by the application to display the proper nav bar
    if(this.router.url === '/'){
      this.previousLocation = '/'
      return 'home'
    } else if (this.router.url === '/find-vendor'){ //Tricky way to determine if the previous route was from pos or dataentry

      if(this.previousLocation === '/sell-item') { //Display pos nav header
        return 'sales'
      } else if (this.previousLocation === '/add-item') { //Display dataEntry nav header
        return 'dataEntry'
      } else { //Should read here but if it does, display home header
        //FIXME - this does result in a bug if you type in directly /find-vendor
        //FIXME - not critical
        return 'home'
      }

    } else if (this.router.url === '/sell-item') { //FIXME - this has to come first??????
      this.previousLocation = '/sell-item'
      return 'sales'
    } else if (this.router.url === '/add-item' || '/add-seller') {
      this.previousLocation = '/add-item'
      return 'dataEntry'
    } else {
      return 'home'
    }
  }

}
