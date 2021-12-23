import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import * as moment from 'moment';
import {auth} from "../models/auth-class/authResponse";
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient: HttpClient) { }

  loginURL = 'http://localhost:8000/login'

  //TODO - found something about .shareReplay() ? Interesting
  login(userName: string, password: string) {
    let params = {
      userName: userName,
      password: password
    }
    return this.httpClient.get(`${this.loginURL}`, {params})
      .pipe(map((res: any) => {
        this.setSession({idToken: res.idToken, expiresIn: res.expiresIn})
      }))
  };

  setSession(authResult: auth) {
    const expiration = moment().add(authResult.expiresIn, 'second');

    localStorage.setItem('id', authResult.idToken);
    localStorage.setItem('expires', JSON.stringify(expiration.valueOf()));
  };

  logout() {
    localStorage.removeItem('idToken');
    localStorage.removeItem('expires');
  }

  isLoggedOut(){
    return !this.isLoggedIn();
  }

  isLoggedIn() {
    return moment().isBefore(this.getExpiration());
  }

  getExpiration() {
    const expiration = localStorage.getItem('expires');
    // @ts-ignore FIXME
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
