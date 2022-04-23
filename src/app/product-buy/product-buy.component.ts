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
 productQty:number=1;
 userName:string="";
 mobile:string="";
 address:string="";

 code:string="";
 description:string="";
 source:string="";
  step:string="";
  reason:string="";
  order_id:string="";
  payment_id:string="";


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
    //  console.log(this.productPrice*this.productQty)
    //  console.log(this.productName)
    //  console.log(this.userName)
    //  console.log(this.address);
    //  console.log(this.mobile);
     let amount=this.productPrice*this.productQty;
    this.serve.createOrder(amount).subscribe((result:any)=>{
      console.log(result);
      console.log(result.id);
      var options = {
        "key": "rzp_test_25KnYfoIcEzVyf", // Enter the Key ID generated from the Dashboard
        "amount": this.productPrice*this.productQty, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": this.productName,
        "description": "payment Transaction",
        // "image": "https://example.com/your_logo",
        "order_id": result.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        // "callback_url": "http://localhost:3000/api/order/order-status",
        "handler": function (response: { razorpay_payment_id: any; razorpay_order_id: any; razorpay_signature: any; }){
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature)
      },
        "prefill": {
            "UserName": this.userName,
            "email": localStorage.getItem('emailuser'),
            "contact": this.mobile
        },
        "notes": {
            "address": this.address,
            "productId":this.pId,
            "userId":localStorage.getItem('admin-id'),
        },
        "theme": {
            "color": "#3399cc"
        }
    };
    var rzp1 = new Razorpay(options);
    rzp1.on('payment.failed',  (response: { error: { code: any; description: any; source: any; step: any; reason: any; metadata: { order_id: any; payment_id: any; }; }; }) =>{
      alert(response.error.code);
      this.code=response.error.code;

      alert(response.error.description);
      this.description=response.error.description;
      alert(response.error.source);
      this.source=response.error.source;
      alert(response.error.step);
      this.step=response.error.step;
      alert(response.error.reason);
      this.reason=response.error.reason;
      alert(response.error.metadata.order_id);
      this.order_id=response.error.metadata.order_id;
      alert(response.error.metadata.payment_id);
      this.payment_id=response.error.metadata.payment_id;
});
    rzp1.open();
    // e.preventDefault();

    })




}

  ngOnInit(): void {
  }

}
