import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as moment from 'moment';
import {auth} from "../models/auth-class/authResponse";

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
  };

  setSession(authResult: auth) {
    const expiresAt = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id', authResult.idToken);
    localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()));
  };

  logout() {
    localStorage.removeItem('idToken');
    localStorage.removeItem('expires_at');
  }

  isLoggedOut(){
    return !this.isLoggedIn();
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires_at');
    // @ts-ignore FIXME
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
