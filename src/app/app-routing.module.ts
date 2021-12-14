import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddSellerComponent} from "./modules/data-entry/components/add-seller/add-seller.component";
import {HomeScreenComponent} from "./modules/home/components/home-screen/home-screen.component";
import {SellItemComponent} from "./modules/point-of-sale/components/sell-item/sell-item.component";

const routes: Routes = [
  {path: '', component: HomeScreenComponent},
  {path: 'data-entry', component: AddSellerComponent},
  {path: 'point-of-sale', component: SellItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
