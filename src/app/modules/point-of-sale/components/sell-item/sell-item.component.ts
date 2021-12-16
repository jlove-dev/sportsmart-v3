import { Component, OnInit } from '@angular/core';
import { PosApiService } from '../../services/pos-api.service';
import { items } from "../../../../shared/item-class/item";
import {NgForm} from "@angular/forms";
import {ItemMessage} from "../../../../shared/message-class/message";

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

  message: ItemMessage = {
    text: ''
  }

  itemsArray: { price: string; category: string; barCode: string }[] = [
  ]

  resetInterface(){
    this.item.barCode = '';
    this.item.category = '';
    this.item.price = '';
  }

  //FIXME - this seems like a VERY complicated way of finding out if the item exists in the DB
  //FIXME - really need to investigate this @Ryan
  onSubmit(form: NgForm) {

    //FIXME - on a bad barCode, it 404's. It then doesn't assign a value to the message interface
    //FIXME - thus, still adds to the array which it doesn't
    this.apiService.getItem(this.item.barCode).subscribe(response => {
      this.message['text'] = response;
    });

    if (this.message['text']['message'] === 'true'){
      this.itemsArray.push(
        {
          price: this.item.price,
          category: this.item.category,
          barCode: this.item.barCode
        }
      );
      this.resetInterface()
      form.resetForm();
    } else {
      this.resetInterface();
      form.resetForm();
    }
  };

  buildReceipt() {
    return this.itemsArray.length > 0;
  }

}
