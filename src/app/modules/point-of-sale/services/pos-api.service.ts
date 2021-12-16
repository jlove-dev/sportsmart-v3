import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { items } from '../../../shared/item-class/item';

@Injectable({
  providedIn: 'root'
})
export class PosApiService {

  //POS API route
  apiURL: string = 'http://localhost:8000/pos'

  constructor(private httpClient: HttpClient) { }

  public sellItem(item: items) {
    return this.httpClient.post(`${this.apiURL}`, item);
  }

  public getItem(barCode: string) {
    let param = {
      barCode: barCode
    }
    return this.httpClient.get(`${this.apiURL}`, {params: param});
  }
}
