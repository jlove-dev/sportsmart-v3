import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSellerComponent } from './components/add-seller/add-seller.component';



@NgModule({
    declarations: [
        AddSellerComponent
    ],
    exports: [
        AddSellerComponent
    ],
    imports: [
        CommonModule
    ]
})
export class DataEntryModule { }
