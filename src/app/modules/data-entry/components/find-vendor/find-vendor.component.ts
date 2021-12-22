import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Seller} from "../../../../shared/models/seller-class/seller";
import {DataApiService} from "../../services/data-api.service";

@Component({
  selector: 'app-find-vendor',
  templateUrl: './find-vendor.component.html',
  styleUrls: ['./find-vendor.component.scss']
})
export class FindVendorComponent implements OnInit {

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
      troopCut: 0
    }
  }

  vendorLookupError = false;
  holdPreviousID = '';

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.holdPreviousID = this.seller.vendorID;
    this.apiService.getSeller(this.seller.vendorID).subscribe((data: any) => {
      if (data.length < 1) {
        this.vendorLookupError = true;
      } else {
        this.vendorLookupError = false;
        this.seller = data[0];
      }
    })
    //FIXME - need to not reset form, rather work with FormGroup like the add-item does
    //FIXME - this is important to maintain the vendorID in the input field
    form.resetForm();
  }

  lookupError() {
    return this.vendorLookupError;
  }

  dataPresent(){
    return this.seller.firstName !== "";
  }

}
