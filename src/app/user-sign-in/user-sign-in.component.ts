import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-sign-in',
  templateUrl: './user-sign-in.component.html',
  styleUrls: ['./user-sign-in.component.css']
})
export class UserSignInComponent implements OnInit {
   userEmail="";
   userPassword="";
  constructor(private _service:UserService,private router:Router) { }
  userSignIn(){
    this._service.check(this.userEmail,this.userPassword).subscribe(result=>{
      if(result){
        console.log(result);
        localStorage.setItem('admin-id',result.current_user._id);
        localStorage.setItem('token-jwt',result.token);
        alert("your login sucessfull");
        this.router.navigate(['home']);
      }
        else
        alert("your login failed");
    });
  }
  googlelogin(){
    
  }
  ngOnInit(): void {
  }

}
// Case 1.
// verify = I want to verify the how so we take every situation we send the token id and cheack 
// in api or backend code  when be generate token id 
// Case 2.
// ya to feer mujhe one other 
// user does not sign out than we will use verify and ridirect login page
// user back to home page  than we  will berify user