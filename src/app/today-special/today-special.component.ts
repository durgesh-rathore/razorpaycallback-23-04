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
  // s:number=6;
  i: any=1;

  show: number=12;


  constructor(private product:ProductService,private router:Router,private cart:CartService) {
    this.product.viewProduct().subscribe(result=>{
      this.productList=result;
    })
   }
   productDesc(pid:any){
     this.router.navigate(['productdesc',pid])
   }
   showmore(){
    //  let l=6;

    // console.log(" show logic"+this.show)

      this.show=6*(this.i++);
   }
   addToCartHtml(pId:any){
     if(localStorage.getItem('admin-id')){
      console.log(localStorage.getItem('admin-id'))
    this.product.addToCart(pId,localStorage.getItem('admin-id')).subscribe(result=>{
      if(result){
        alert("added to cart");
      }
      else
      alert("something went wrong...")
    })
 }
 else{
  this.router.navigate(['signin'])
 }
}

// removeFromCartHtml(pId:any){
//  this.cart.removeFromCart(pId,localStorage.getItem('admin-id')).subscribe(result=>{
//    if(result)
//    alert("delete Sucessfully");
//    else
//     alert("failed to Delete item");
//  })
// }
  ngOnInit(): void {
  }

}
