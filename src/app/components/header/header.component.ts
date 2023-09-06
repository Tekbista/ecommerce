import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalItemOnCart = 0;
  constructor(private _cartService: CartServiceService, private router: Router) { }

  ngOnInit(): void {
    this._cartService.getProducts().subscribe((res) =>{
      let totalItem = 0;
      res.map((pro) =>{
        totalItem += pro.quantity
      })
      this.totalItemOnCart = totalItem;
    })
    
  }

  isUserLoggedIn(){
    if(localStorage.getItem("token") !== ""){
      return true;
    }

    return false;
  }

  logout(){
    localStorage.setItem("token", "");
    this.router.navigate(["/login"])
  }
}
