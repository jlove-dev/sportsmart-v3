import {Component, Input, OnInit} from '@angular/core';
import {PosApiService} from "../../services/pos-api.service";

@Component({
  selector: 'app-sell-table',
  templateUrl: './sell-table.component.html',
  styleUrls: ['./sell-table.component.scss']
})
export class SellTableComponent implements OnInit {

  constructor(private apiService: PosApiService) { }

  ngOnInit(): void {
  }

  @Input() itemsArray: any [] = [];

  sellItems() {
    for(let i = 0; i < this.itemsArray.length; i++){
      //This doesn't work without subscribing??
      this.apiService.sellItem(this.itemsArray[i].barCode).subscribe((response) => {
        console.log(response);
      });
    }

    this.itemsArray = [];
  }

}
