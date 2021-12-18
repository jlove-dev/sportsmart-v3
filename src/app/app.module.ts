import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataEntryModule} from "./modules/data-entry/data-entry.module";
import {HomeModule} from "./modules/home/home.module";
import {PointOfSaleModule} from "./modules/point-of-sale/point-of-sale.module";
import {SharedModule} from "./shared/shared.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataEntryModule,
    HomeModule,
    PointOfSaleModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
