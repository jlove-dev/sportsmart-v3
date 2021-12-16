import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sell-table',
  templateUrl: './sell-table.component.html',
  styleUrls: ['./sell-table.component.scss']
})
export class SellTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() itemsArray: { price: string; category: string; barCode: string; }[] = [];

}
