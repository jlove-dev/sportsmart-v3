import { Component, OnInit } from '@angular/core';
import { items} from "../../../../shared/item-class/item";
import {FormControl, FormGroup, NgForm} from "@angular/forms";
import { DataApiService } from "../../services/data-api.service";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor(private apiService: DataApiService) { }

  firstForm = new FormGroup({
    vendorID: new FormControl(''),
  });

  //These forms are asserted to be not null fields
  //FIXME - investigate best practice here
  secondForm = new FormGroup({
    vendorID: new FormControl(''),
    itemID: new FormControl(''),
    itemCode: new FormControl(''),
    price: new FormControl('')
  })

  item: items = {
    barCode: '',
    category: '',
    price: ''
}

  vendorID = null;

  vendorAdded = false;

  ngOnInit(): void {
  }

  clearID(){
    this.firstForm.setValue({vendorID: ''});
    this.secondForm.reset();
    this.vendorID = null;
    this.vendorAdded = false;
  }

  onVendorSubmit(){
    // @ts-ignore
    if(this.firstForm.get('vendorID').value === ''){
      return
    }

    let vendorValid = false;
    // Check if the vendorID is valid
    if(!vendorValid){
      this.apiService.checkSeller(this.firstForm.get('vendorID')!.value).subscribe((response) => {
        vendorValid = response >= 1;
        if(vendorValid){
          this.vendorAdded = true;
          // @ts-ignore
          this.vendorID = this.firstForm.get('vendorID').value;
          this.secondForm.patchValue({vendorID: this.firstForm.get('vendorID')!.value});
        }
      })
    }

  }

  getStatus(){
    return this.vendorAdded;
  }

  setItem() {
    this.item.barCode = this.secondForm.get('itemID')!.value;
    this.item.category = this.secondForm.get('itemCode')!.value;
    this.item.price = this.secondForm.get('price')!.value;
  }

  submitItem() {

    this.setItem();

    this.apiService.addItem(this.vendorID!, this.item).subscribe(() => {
      console.log('Added item');
    })
    this.secondForm.reset();
  }

}
