import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private _adminService:UserService){

  }
  canActivate():boolean{
  if(this._adminService.cheackToken())
    return true;
    else
     return false;
  }
  
}
