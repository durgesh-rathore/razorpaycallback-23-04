import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  viewCartUrl = "https://angularapi-api.herokuapp.com/api/cart/viewcart"
  removeFromeCartUrl = "https://angularapi-api.herokuapp.com/api/cart/removefromcart"

  constructor(private _http: HttpClient) { }
  viewCart(userId: any): Observable<any> {
    return this._http.post(this.viewCartUrl, { userId });
  }

  removeFromCart(pId: any, uId: any) {
    return this._http.post(this.removeFromeCartUrl, { userId: uId, pId: pId })
  }

}

