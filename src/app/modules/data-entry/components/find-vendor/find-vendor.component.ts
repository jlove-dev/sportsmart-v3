import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Seller} from "../../../../shared/seller-class/seller";
import {ApiService} from "../../services/api.service";

@Component({
  selector: 'app-find-vendor',
  templateUrl: './find-vendor.component.html',
  styleUrls: ['./find-vendor.component.scss']
})
export class FindVendorComponent implements OnInit {

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
