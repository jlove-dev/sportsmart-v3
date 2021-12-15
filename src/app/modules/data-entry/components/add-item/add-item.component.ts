import { Component, OnInit } from '@angular/core';
import {Seller} from "../../../../shared/seller-class/seller";
import {FormControl, FormGroup, NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor() { }

  firstForm = new FormGroup({
    vendorID: new FormControl(''),
  });

  secondForm = new FormGroup({
    // @ts-ignore
    vendorID: this.firstForm.get('vendorID').value,
    itemID: new FormControl(''),
    itemCode: new FormControl(''),
    price: new FormControl('')
  })

  vendorID = null;

  vendorAdded = false;

  ngOnInit(): void {
  }

  clearID(){
    this.firstForm.setValue({vendorID: ''});
    this.vendorID = null;
    this.vendorAdded = false;
  }

  onVendorSubmit(){
    // @ts-ignore
    if(this.firstForm.get('vendorID').value === ''){
      return
    }
    this.vendorAdded = true;
    // @ts-ignore
    this.vendorID = this.firstForm.get('vendorID').value;
  }

  getStatus(){
    return this.vendorAdded;
  }

}
