import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { pid } from 'process';
// import { pid } from 'process';
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
  constructor(private router:ActivatedRoute,private productser:ProductService) {
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
          console.log("durgesh"+pId1);


          // console.log("pid"+pId1)
        // this.productdesc=pId1;
          // console.log("productdesc"+this.productdesc)
        }
       }
    }

  })

   }


  ngOnInit():void {
  }

}
