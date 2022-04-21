import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  pId: any;
  productDescription:string="";
  productImageUrl:any="";
  productPrice:number=0;
  productName:string=""
  constructor(private router:ActivatedRoute,private routern:Router,private productser:ProductService) {
  this.pId=this.router.snapshot.paramMap.get('pid');
  this.productser.viewProduct().subscribe(result=>{
    if(result){
      // console.log(result)
      for(let pId1 of result){
          // console.log(pId1)
        if(pId1._id==this.pId){
          this.pId=pId1._id;
          this.productDescription=pId1.productDescription;
          this.productImageUrl=pId1.productImageUrl;
          this.productPrice=pId1.productPrice;
          this.productName=pId1.productName;
          console.log("durgesh"+pId1);

        }
       }
    }

  })

   }

   addToCart(){
  alert("ram ram")
   }
   buyNow(){
      this.routern.navigate(["productBuy",this.pId]);
   }
  ngOnInit():void {
  }

}
