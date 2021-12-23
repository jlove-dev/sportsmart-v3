import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddSellerComponent} from "./modules/data-entry/components/add-seller/add-seller.component";
import {HomeScreenComponent} from "./modules/home/components/home-screen/home-screen.component";
import {SellItemComponent} from "./modules/point-of-sale/components/sell-item/sell-item.component";
import {AddItemComponent} from "./modules/data-entry/components/add-item/add-item.component";
import {FindVendorComponent} from "./modules/data-entry/components/find-vendor/find-vendor.component";
import {FindItemComponent} from "./modules/point-of-sale/components/find-item/find-item.component";
import {LoginComponentComponent} from "./shared/components/login-component/login-component.component";
import {AuthActivate} from "./shared/services/auth-guard";

const routes: Routes = [
  {path: '', component: LoginComponentComponent},
  {path: 'add-seller', component: AddSellerComponent, canActivate: [AuthActivate]},
  {path: 'add-item', component: AddItemComponent, canActivate: [AuthActivate]},
  {path: 'find-vendor', component: FindVendorComponent, canActivate: [AuthActivate]},
  {path: 'sell-item', component: SellItemComponent, canActivate: [AuthActivate]},
  {path: 'find-item', component: FindItemComponent, canActivate: [AuthActivate]},
  {path: 'home', component: HomeScreenComponent, canActivate: [AuthActivate]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
