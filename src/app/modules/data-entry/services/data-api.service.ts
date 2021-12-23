import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seller } from '../../../shared/models/seller-class/seller';
import { items } from '../../../shared/models/item-class/item';
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  //This will likely need to change as more route are added
  sellerApiURL: string = 'http://localhost:8000/sellers'
  posApiURL: string = 'http://localhost:8000/pos'

  constructor(private httpClient: HttpClient) { }

  public createSeller(seller: Seller) {
    return this.httpClient.post(`${this.sellerApiURL}`, seller);
  }

  public getSeller(vendorID: string) {
    let param = {
      vendorID: vendorID
    };
    return this.httpClient.get(`${this.sellerApiURL}`, {params: param});
  }

  public addItem(vendorID: string, item: items){
    return this.httpClient.put(`${this.sellerApiURL}/${vendorID}`, item);
  }

  //Make sure to call the posAPI
  public getItem(barCode: string){
    let param = {
      barCode: barCode
    };
    return this.httpClient.get(`${this.posApiURL}`, {params: param})
      .pipe(map((res: any) => {
          console.log(res);
          if (res !== null){
            return {price: res.price, category: res.category, barCode: res.barCode}
          } else {
            return null
          }
        })
      )
  }

  public checkSeller(vendorID: string) {
    let param = {
      vendorID: vendorID
    };
    return this.httpClient.get(`${this.sellerApiURL}/${vendorID}`, {params: param});
  }
}
