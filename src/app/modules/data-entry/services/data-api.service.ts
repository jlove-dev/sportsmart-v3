import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seller } from '../../../shared/seller-class/seller';
import { items } from '../../../shared/item-class/item';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  //This will likely need to change as more route are added
  apiURL: string = 'http://localhost:8000/sellers'

  constructor(private httpClient: HttpClient) { }

  public createSeller(seller: Seller) {
    return this.httpClient.post(`${this.apiURL}`, seller);
  }

  public getSeller(vendorID: string) {
    let param = {
      vendorID: vendorID
    };
    return this.httpClient.get(`${this.apiURL}`, {params: param});
  }

  public addItem(vendorID: string, item: items){
    return this.httpClient.put(`${this.apiURL}/${vendorID}`, item);
  }
}
