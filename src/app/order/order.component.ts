import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  productId:any="";
  productQty:number=0;
  producttotal:number=0;
  mobile:string="";
  address:string="";
  city:string="";


  constructor(private orderservice:OrderService) { }
    placeOrderHtml(){
      let formdata=new FormData();
      
      this.orderservice.placeOrder(formdata).subscribe(result=>{
        if(result)
        alert("place Ordered");
        else
        alert("Failed to Place Ordered");
      })
    }
  ngOnInit(): void {
  }

}
