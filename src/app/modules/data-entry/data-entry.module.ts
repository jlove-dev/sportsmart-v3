import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSellerComponent } from './components/add-seller/add-seller.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { FindVendorComponent } from './components/find-vendor/find-vendor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {RouterModule} from "@angular/router";
import { DataEntryNavHeaderComponent } from './components/data-entry-nav-header/data-entry-nav-header.component';

@NgModule({
    declarations: [
        AddSellerComponent,
        AddItemComponent,
        FindVendorComponent,
        DataEntryNavHeaderComponent
    ],
    exports: [
        AddSellerComponent
    ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ]
})
export class DataEntryModule { }
