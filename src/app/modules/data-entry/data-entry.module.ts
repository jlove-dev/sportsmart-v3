import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSellerComponent } from './components/add-seller/add-seller.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { FindVendorComponent } from './components/find-vendor/find-vendor.component';



@NgModule({
    declarations: [
        AddSellerComponent,
        AddItemComponent,
        FindVendorComponent
    ],
    exports: [
        AddSellerComponent
    ],
    imports: [
        CommonModule
    ]
})
export class DataEntryModule { }
