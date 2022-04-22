import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  // productId:any="";
  productQty:number=0;
  producttotal:number=0;
  // productDiscount:number=0;
  productPrice:number=0;
  mobile:string="";
  address:string="";
  city:string="";
  // productName:string="";
  uId: any;
  total:number=0;
  cartList: any;


  constructor(private cart:CartService,private orderservice:OrderService,private router:ActivatedRoute) {
  // constructor(private router:ActivatedRoute,private cs:CategoryService) {
    // this.cid=this.router.snapshot.paramMap.get('cid')
    this.uId=this.router.snapshot.paramMap.get('uId')
    this.cart.viewCart(localStorage.getItem('admin-id')).subscribe(result=>{
      if(result){
        console.log(result);
      this.cartList=result.productId;
      }
      else
      alert("cart not found")
  })
  }

    placeOrderHtml(){
      // let formdata=new FormData();

      this.orderservice.placeOrder(this.address,this.city,this.mobile,this.uId,this.cartList).subscribe(result=>{
        if(result)
        alert("place Ordered");
        else
        alert("Failed to Place Ordered");
      })
    }
  ngOnInit(): void {
  }

}
