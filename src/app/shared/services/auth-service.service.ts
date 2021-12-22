import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient: HttpClient) { }

  loginURL = 'http://localhost:3000/login'
  //FIXME - found something about .shareReplay() ? Interesting
  login(email: string, password: string) {
    return this.httpClient.post(`${this.loginURL}`, {email, password}).subscribe((response) => {
      console.log(response);
    })
  }
}
