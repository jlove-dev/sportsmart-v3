import { Component, OnInit } from '@angular/core';
import {DataApiService} from "../../../data-entry/services/data-api.service";
import {Seller} from "../../../../shared/seller-class/seller";
import {NgForm} from "@angular/forms";
import {items} from "../../../../shared/item-class/item";

@Component({
  selector: 'app-find-item',
  templateUrl: './find-item.component.html',
  styleUrls: ['./find-item.component.scss']
})
export class FindItemComponent implements OnInit {

  //FIXME - there's some issues with how this functions. If the VendorID is invalid on the API, it does funny things

  constructor(private apiService: DataApiService) { }

  item: items = {
    barCode: '',
    category: '',
    price: ''
}

  itemLookupError = false;
  holdPreviousBarCode = '';

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.holdPreviousBarCode = this.item.barCode;
    this.apiService.getItem(this.item.barCode).subscribe((data: any) => {
      this.item.barCode = data.barCode;
      this.item.category = data.category;
      this.item.price = data.price;
    })
    form.resetForm();
  }

  lookupError() {
    return this.itemLookupError;
  }

  dataPresent(){
    return this.item.price !== "";
  }

}
