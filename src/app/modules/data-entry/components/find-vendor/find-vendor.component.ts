import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Seller} from "../../../../shared/seller-class/seller";
import {DataApiService} from "../../services/data-api.service";

@Component({
  selector: 'app-find-vendor',
  templateUrl: './find-vendor.component.html',
  styleUrls: ['./find-vendor.component.scss']
})
export class FindVendorComponent implements OnInit {

  //FIXME - there's some issues with how this functions. If the VendorID is invalid on the API, it does funny things

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

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.apiService.getSeller(this.seller.vendorID).subscribe((data: any) => {
      this.seller = data[0];
    })
    form.resetForm();
  }

  dataPresent(){
    return this.seller.firstName !== "";
  }

}
