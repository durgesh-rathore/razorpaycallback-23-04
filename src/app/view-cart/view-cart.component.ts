import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent implements OnInit {
  cartList:any;
  status="remove from cart";
  constructor(private cart:CartService,private router:Router) {
     this.cart.viewCart(localStorage.getItem('admin-id')).subscribe(result=>{
         if(result)
         this.cartList=result.productId;
         else
         alert("cart not found")
     })  
   }

  removeFromCart(pId:any){
    this.cart.removeFromCart(pId,localStorage.getItem('admin-id')).subscribe(result=>{
      if(result)
      alert("deleted succesfully");
        
      else 
      alert('some thing went wrong');
    })
  }
  
   ngOnInit(): void {
  }
  

}
