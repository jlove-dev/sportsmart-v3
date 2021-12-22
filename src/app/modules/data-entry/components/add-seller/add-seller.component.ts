import { Component, OnInit } from '@angular/core';
import { DataApiService } from "../../services/data-api.service";
import { Seller } from "../../../../shared/models/seller-class/seller";
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add-seller',
  templateUrl: './add-seller.component.html',
  styleUrls: ['./add-seller.component.scss']
})
export class AddSellerComponent implements OnInit {

  constructor(private apiService: DataApiService) { }


  seller: Seller = {
    vendorID: "",
    phoneNum: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    salesFigures: {
      totalSold: 0,
      vendorCut: 0,
      troopCut: 0,
    }
  }

  submitted = false;

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
