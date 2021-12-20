import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { items } from '../../../shared/item-class/item';
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PosApiService {

  //POS API route
  apiURL: string = 'http://localhost:8000/pos'

  constructor(private httpClient: HttpClient) { }

  public sellItem(barCode: string) {
    let param = {
      barCode: barCode
    }
    return this.httpClient.post(`${this.apiURL}`, {params: param});
  }

  public getItem(barCode: string) {
    let param = {
      barCode: barCode
    }

    //Pipe the response to either return a new object with the fields from the response
    //Or, it returns null since the ID isn't found
    return this.httpClient.get(`${this.apiURL}`, {params: param})
      .pipe(map((res: any) => {
        console.log(res);
        if (res !== null){
          return {price: res.price, category: res.category, barCode: res.barCode}
        } else {
          return null
        }
      })
      );
  }
}
