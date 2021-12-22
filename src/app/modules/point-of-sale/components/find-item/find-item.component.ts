import { Component, OnInit } from '@angular/core';
import {DataApiService} from "../../../data-entry/services/data-api.service";
import {Seller} from "../../../../shared/models/seller-class/seller";
import {NgForm} from "@angular/forms";
import {items} from "../../../../shared/models/item-class/item";

@Component({
  selector: 'app-find-item',
  templateUrl: './find-item.component.html',
  styleUrls: ['./find-item.component.scss']
})
export class FindItemComponent implements OnInit {

  constructor(private apiService: DataApiService) { }

  item: items = {
    barCode: '',
    category: '',
    price: ''
}

  barCodeLookup = '';
  itemLookupError = false;
  holdPreviousBarCode = '';

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.holdPreviousBarCode = this.barCodeLookup;
    this.apiService.getItem(this.barCodeLookup).subscribe((data: any) => {
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
