import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {
  categoryList: any;

  constructor( private category:CategoryService) {
    this.category.viewCategoryf().subscribe(result=>{
      if(result){
        console.log("result"+result);
        this.categoryList=result;  
      }
      this.categoryList=result;
    })
   }


  ngOnInit(): void {
  }

}
