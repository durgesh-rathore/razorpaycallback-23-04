import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-today-special',
  templateUrl: './today-special.component.html',
  styleUrls: ['./today-special.component.css']
})
export class TodaySpecialComponent implements OnInit {
  productList: any;

  constructor(private product:ProductService,private router:Router,private cart:CartService) {
    this.product.viewProduct().subscribe(result=>{
      this.productList=result;
    })
   }
   addToCartHtml(pId:any){
    this.product.addToCart(pId,localStorage.getItem('admin-id')).subscribe(result=>{
      if(result){
        alert("added to cart");
      }
      else 
      alert("something went wrong...")
    })
}

removeFromCartHtml(pId:any){
 this.cart.removeFromCart(pId,localStorage.getItem('admin-id')).subscribe(result=>{
   if(result)
   alert("delete Sucessfully");
   else
    alert("failed to Delete item");
 })
}
  ngOnInit(): void {
  }

}
