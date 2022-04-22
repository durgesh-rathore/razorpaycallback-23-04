import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-usernavigation',
  templateUrl: './usernavigation.component.html',
  styleUrls: ['./usernavigation.component.css']
})
export class UsernavigationComponent implements OnInit {

  constructor(private _service:UserService) { }
  cheackTokenHtml(){
    return this._service.cheackToken();
  }
  signOut(){
    localStorage.removeItem('token-jwt');
  }

  ngOnInit(): void {
  }

}
