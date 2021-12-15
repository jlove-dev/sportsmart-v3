import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Seller } from "../../services/seller-class/seller";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-seller',
  templateUrl: './add-seller.component.html',
  styleUrls: ['./add-seller.component.scss']
})
export class AddSellerComponent implements OnInit {

  constructor(private apiService: ApiService) { }


  seller: Seller = {
    vendorID: "",
    phoneNum: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  }

  submitted = false;

  //FIXME - is this the best way to reset this form?
  onSubmit(sellerForm: NgForm) {
    this.apiService.createSeller(this.seller).subscribe(() => {
      console.log(`Created seller: ${this.seller.firstName}`);
    });
    sellerForm.resetForm();
  }

  getSeller() {
    return JSON.stringify(this.seller);
  }

  ngOnInit() {
  }

}
