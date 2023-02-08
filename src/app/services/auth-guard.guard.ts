import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { async } from '@angular/core/testing';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private _userService: UserService, private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(localStorage.getItem("token")){
      if(this.isUserLoggedIn()){
        return true;
      }
    }
    this.router.navigate(['/login'])
    return false;
  }

  isUserLoggedIn(){
    return this._userService.verifyLogin().pipe(map((data) =>{
      if(data === true){
        return true;
      }else{
        return false;
      }
    }))
  }
  
}
