import { Component, OnInit } from '@angular/core';
import {Seller} from "../../../../shared/seller-class/seller";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor() { }

  vendorID = "";

  vendorAdded = false;

  ngOnInit(): void {
  }

  clearID(){
    this.vendorID = "";
    this.vendorAdded = false;
  }

  onVendorSubmit(){
    if (this.vendorID === "") {
      return
    }
    this.vendorAdded = true;
    console.log('vendorID:', this.vendorID);
  }

  //FIXME - doesn't work
  requestReset(form: NgForm){
    console.log('requesting reset')
    try {
      form.resetForm(this.vendorID);
    } catch(e) {
      console.log(e);
    }
    // @ts-ignore
    //FIXME - better way to do this?
    //document.getElementById("vendorID").value = this.vendorID;
  }

  getStatus(){
    return this.vendorAdded;
  }

}
