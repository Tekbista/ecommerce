import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGuardGuard } from 'src/app/services/auth-guard.guard';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalItemOnCart!: number;
  constructor(private _cartService: CartServiceService, private router: Router) { }

  ngOnInit(): void {
    this._cartService.getProducts().subscribe((res) =>{
      this.totalItemOnCart = res.length;
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
