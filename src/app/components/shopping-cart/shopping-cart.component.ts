import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: Product[] = [];
  totalItemsInCart: number = 0;
  cartTotal = 0;
  checkout: string = "Checkout";
  constructor(
    private _cartService: CartServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this._cartService.getProducts().subscribe({
      next: (response) =>{
        this.cartItems = response
        this.totalItemsInCart = response.length;
      },
      complete: () =>{ },
      error: (error) =>{console.log(error)}
    })

    this.cartTotal = this._cartService.getTotalPrice()
  }

  removeItemFromCart(product: Product){
    this._cartService.removeCartItem(product);
    this.cartTotal = this._cartService.getTotalPrice();
  }

  
}
