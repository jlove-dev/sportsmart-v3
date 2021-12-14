import { Component, OnInit } from '@angular/core';
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-add-seller',
  templateUrl: './add-seller.component.html',
  styleUrls: ['./add-seller.component.scss']
})
export class AddSellerComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  private seller = {
    vendorID: "-1",
    phoneNum: "20",
    firstName:  "Joe",
    lastName: "schmo",
    address: "123 main",
    city: "yogaville",
    state: "VA",
    zipCode: "11111",
  }

  //FIXME  - Had to add CORS proxy for this to work - need to investigate
  ngOnInit(): void {
    this.apiService.createSeller(this.seller).subscribe(() => {
      console.log(`Created seller: ${this.seller.firstName}`);
    })
  }

}
