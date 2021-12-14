import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";
import { Seller } from "../../services/seller-class/seller";

@Component({
  selector: 'app-add-seller',
  templateUrl: './add-seller.component.html',
  styleUrls: ['./add-seller.component.scss']
})
export class AddSellerComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  seller: Seller = {
    vendorID: "1",
    phoneNum: "20",
    firstName: "Joe",
    lastName: "Schmo",
    address: "123 main",
    city: "Arlington",
    state: "VA",
    zipCode: "11111",
    salesFigures: {
      totalSold: 0,
      vendorCut: 0,
      troopCut: 0
    },
    items: {
      active: [{barCode: "0", category: "0", price: "0"}],
      sold: [{barCode: "1", category: "1", price: "1"}]
    }
  }

  //FIXME  - Had to add CORS proxy for this to work - need to investigate
  ngOnInit(): void {
    console.log('Sending:', this.seller);
    this.apiService.createSeller(this.seller).subscribe(() => {
      console.log(`Created seller: ${this.seller.firstName}`);
    })
  }

}
