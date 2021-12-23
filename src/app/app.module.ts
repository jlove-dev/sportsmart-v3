import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataEntryModule} from "./modules/data-entry/data-entry.module";
import {HomeModule} from "./modules/home/home.module";
import {PointOfSaleModule} from "./modules/point-of-sale/point-of-sale.module";
import {SharedModule} from "./shared/shared.module";
import {AuthActivate} from "./shared/services/auth-guard";
import {AuthInterceptorService} from "./shared/services/auth-interceptor.service";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import {httpInterceptorProviders} from "./shared/services/interceptor.index";

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
    SharedModule,
    HttpClientModule
  ],
  providers: [AuthActivate, httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
