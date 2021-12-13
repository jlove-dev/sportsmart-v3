import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-seller',
  templateUrl: './add-seller.component.html',
  styleUrls: ['./add-seller.component.scss']
})
export class AddSellerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  test() {
    console.log('hit test');
  }

}
