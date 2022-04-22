import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {
  categoryList: any;
show:number=8;
i:any=1;
  constructor( private category:CategoryService,private router:Router) {
    this.category.viewCategoryf().subscribe(result=>{
      if(result){
        console.log("result"+result);

        this.categoryList=result;  
      }
      this.categoryList=result;
    })
   }
   showCategoryProduct(cid:any){
   console.log(cid);
    this.router.navigate(['categorywiseproduct',cid])
   }
   showmore(){
    //  let l=6;
    console.log(" show logic"+this.show)
      // this.show=6*(this.i++);
   }
  ngOnInit(): void {
  }

}
