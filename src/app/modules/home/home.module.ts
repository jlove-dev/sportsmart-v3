import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
    declarations: [
        HomeScreenComponent
    ],
    exports: [
        HomeScreenComponent
    ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class HomeModule { }
