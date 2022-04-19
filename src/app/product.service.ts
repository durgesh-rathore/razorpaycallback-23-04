import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  addProductUrl="https://angularapi-api.herokuapp.com/api/product/add";
  viewProductUrl="https://angularapi-api.herokuapp.com/api/product/product-list";
  deleteProductUrl="https://angularapi-api.herokuapp.com/api/product/delete-product";
  cartUrl="https://angularapi-api.herokuapp.com/api/cart/addtocart";
  public responseCache = new Map();
  constructor( private _http:HttpClient ) {
     }
     addProduct(formdata:FormData):Observable<any>{
      return this._http.post(this.addProductUrl,formdata);
     }
     productsFromCache:any;
     viewProduct():Observable<any> {
       this.productsFromCache = this.responseCache.get(this.viewProductUrl);
      if (this.productsFromCache) {
        return of (this.productsFromCache);
      }
      const response = this._http.get<any>(this.viewProductUrl);
      response.subscribe(products => this.responseCache.set(this.viewProductUrl, products)
      
      );
     
      
      return response;
     
      //  return this.http.get(this.viewProductUrl);
     }
     
     deleteProduct(Pid:any):Observable<any>{
    let result:Observable<any>;
     return this._http.post(this.deleteProductUrl,{id:Pid})
       //this.productsFromCache.clear();
       //return result;
     }
     addToCart(pId:any,uId:any):Observable<any>{
       console.log(pId+"+"+uId);
       return this._http.post(this.cartUrl,{userId:uId,productId:pId})
     }
}
