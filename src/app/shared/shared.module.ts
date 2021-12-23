import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './components/nav-header/nav-header.component';
import {RouterModule} from "@angular/router";
import { LoginComponentComponent } from './components/login-component/login-component.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    NavHeaderComponent,
    LoginComponentComponent
  ],
    exports: [
        NavHeaderComponent,
        LoginComponentComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class SharedModule { }
