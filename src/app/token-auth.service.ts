import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenAuthService implements HttpInterceptor  {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler){
    let tokenizedRequest=req.clone({
      setHeaders:{
        Authorization: ""+localStorage.getItem("token-jwt")

      }
    }); 
    return next.handle(tokenizedRequest);

      
      
  }
}
