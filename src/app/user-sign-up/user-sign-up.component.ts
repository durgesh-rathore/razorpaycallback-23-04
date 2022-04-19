import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css'],
  exportAs: 'app-user-sign-up'

})
export class UserSignUpComponent implements OnInit {
  //  userName="";
   userEmail="";
   userPassword="";
  //  userMobile="";
  
  
  constructor(private service:UserService) { }


userSignUp(){
  this.service.userapiservice(this.userEmail,this.userPassword).subscribe(result=>{
    if(result)
     alert("sucssesfule");
     else
     alert("Fail to push");
  })
   
  // console.warn(data);
}

  ngOnInit(): void {
  }

}
