import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = sessionStorage.getItem('id');

    console.log('Inside interceptor');

    if(idToken) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${idToken}`
        }
      });

      console.log(cloned);
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
