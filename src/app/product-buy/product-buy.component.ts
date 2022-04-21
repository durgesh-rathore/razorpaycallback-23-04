// import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../order.service';
import { ProductService } from '../product.service';
declare let Razorpay:any;
@Component({
  selector: 'app-product-buy',
  templateUrl: './product-buy.component.html',
  styleUrls: ['./product-buy.component.css']
})
export class ProductBuyComponent implements OnInit {
 pId:any="";
 productName:string="";
 productPrice:number=0;
 productQty:number=0;
 userName:string="";
 mobile:string="";
 address:string="";
 total:number=0;
  constructor(private router:ActivatedRoute,private productser:ProductService,private serve:OrderService) {
    this.pId=this.router.snapshot.paramMap.get('pId');
    console.log("Pid"+this.pId)
    this.productser.viewProduct().subscribe(result=>{
      if(result){
        // console.log(result);
        for(let p1 of result){
        // console.log("in"+p1.productName);
        if(p1._id==this.pId)
          this.productName=p1.productName;
          this.productPrice=p1.productPrice;

          // console.log("right or wrong"+p1.productName);
          

      }
    }
    })
   }
   RazorPayment(){
    this.serve.createOrder(this.total).subscribe((result:any)=>{
      console.log(result);
      console.log(result.id);
      var options = {
        "key": "rzp_test_25KnYfoIcEzVyf", // Enter the Key ID generated from the Dashboard
        "amount": "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": result.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": "http://localhost:3000/order-status",
        "prefill": {
            "name": "Gaurav Kumar",
            "email": "gaurav.kumar@example.com",
            "contact": "9999999999"
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();

    })
 

  
   
}

  ngOnInit(): void {
  }

}
