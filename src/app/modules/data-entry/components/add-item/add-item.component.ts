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

  //Formgroup for only the first form
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

  //Import items interface
  item: items = {
    barCode: '',
    category: '',
    price: ''
}

  //Global variables
  vendorID = null;
  holdPreviousID = null;
  vendorAdded = false;
  vendorFindError = false;

  ngOnInit(): void {
  }

  //Clear ID since the vendor does not exist
  clearID(){
    this.firstForm.setValue({vendorID: ''});
    this.secondForm.reset();
    this.vendorID = null;
    this.vendorAdded = false;
  }

  //On first submit
  onVendorSubmit(){

    //If the user hasn't entered a vendorID
    if(this.firstForm.get('vendorID')!.value === ''){
      return
    }

    let vendorValid = false;
    // Check if the vendorID is valid
    if(!vendorValid){
      this.apiService.checkSeller(this.firstForm.get('vendorID')!.value).subscribe((response) => {

        if(response !== null) { //The vendor exists in the db
          this.vendorAdded = true;
          this.vendorFindError = false;
          this.vendorID = this.firstForm.get('vendorID')!.value;
          this.secondForm.patchValue({vendorID: this.firstForm.get('vendorID')!.value});
        } else { //The vendor does not exist, display error message
          this.vendorFindError = true;
          this.holdPreviousID = this.firstForm.get('vendorID')!.value;
        }
      })
    }

  }

  //Get status of if the vendor has been added for elseblock of NgIf
  getStatus(){
    return this.vendorAdded;
  }

  //Conditional if an error should be displayed or not
  lookupError() {
    return this.vendorFindError;
  }

  //Set the item interface
  setItem() {
    this.item.barCode = this.secondForm.get('itemID')!.value;
    this.item.category = this.secondForm.get('itemCode')!.value;
    this.item.price = this.secondForm.get('price')!.value;
  }

  //Actual API call to add the item to the database
  submitItem() {

    this.setItem();

    this.apiService.addItem(this.vendorID!, this.item).subscribe(() => {
      console.log('Added item');
    })
    this.secondForm.reset();
  }

}
