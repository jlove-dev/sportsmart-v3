import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Seller } from './seller-class/seller';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //This will likely need to change as more route are added
  apiURL: string = 'http://localhost:8000/sellers'

  constructor(private httpClient: HttpClient) { }

  public createSeller(seller: Seller) {
    return this.httpClient.post(`${this.apiURL}`, seller);
  }
}
