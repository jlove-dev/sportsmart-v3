import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellItemComponent } from './components/sell-item/sell-item.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { SellTableComponent } from './components/sell-table/sell-table.component';
import { FindItemComponent } from './components/find-item/find-item.component';



@NgModule({
    declarations: [
        SellItemComponent,
        SellTableComponent,
        FindItemComponent
    ],
    exports: [
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ]
})
export class PointOfSaleModule { }
