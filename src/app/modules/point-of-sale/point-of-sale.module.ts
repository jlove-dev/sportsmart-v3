import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellItemComponent } from './components/sell-item/sell-item.component';
import { PosNavHeaderComponent } from './components/pos-nav-header/pos-nav-header.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import { SellTableComponent } from './components/sell-table/sell-table.component';



@NgModule({
  declarations: [
    SellItemComponent,
    PosNavHeaderComponent,
    SellTableComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ]
})
export class PointOfSaleModule { }
