import { Component, OnInit } from '@angular/core';
import { PosApiService } from '../../services/pos-api.service';
import { items } from "../../../../shared/models/item-class/item";
import {NgForm} from "@angular/forms";
import {ItemMessage} from "../../../../shared/models/message-class/message";

@Component({
  selector: 'app-sell-item',
  templateUrl: './sell-item.component.html',
  styleUrls: ['./sell-item.component.scss']
})
export class SellItemComponent implements OnInit {

  constructor(private apiService: PosApiService) { }

  ngOnInit(): void {
  }

  //models
  item: items = {
    barCode: "",
    category: "",
    price: ""
}

  //Message interface
  message: ItemMessage = {
    text: ''
  }

  //Create itemsArray to pass down to sell-table component
  itemsArray: { listedPrice: string; price: string; category: string; barCode: string }[] = [
  ]

  lookUpError = false;
  previousID = '';

  //Reset the item interface
  resetInterface(){
    this.item.barCode = '';
    this.item.category = '';
    this.item.price = '';
  }

  onSubmit(form: NgForm) {

    //Further information on what's going on here can be found by diving into the response chain
    //getItem utilizes Angular pipes and the actual query is a MongoDB Aggregation pipeline
    this.apiService.getItem(this.item.barCode).subscribe(response => {
      if(response !== null){
        this.itemsArray.push(
          {
            listedPrice: response.price,
            price: this.item.price,
            category: response.category,
            barCode: response.barCode
          }
        )
        this.resetInterface();
        form.resetForm();
        this.lookUpError = false;
      } else {
        this.previousID = this.item.barCode;
        this.lookUpError = true;
      }
    });
  };

  //FIXME - refer to HTML FIXME
  checkLookupStatus() {
    return this.lookUpError;
  }

  //Check if items have been added to the array
  buildReceipt() {
    return this.itemsArray.length > 0;
  }

}
