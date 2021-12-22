import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import {RouterModule} from "@angular/router";
import { LoginComponentComponent } from './components/login-component/login-component.component';



@NgModule({
  declarations: [
    NavHeaderComponent,
    LoginComponentComponent
  ],
  exports: [
    NavHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
