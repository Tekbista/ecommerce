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
  cartTotal: number = 0;
  checkout: string = "Checkout";
  constructor(
    private _cartService: CartServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this._cartService.getProducts().subscribe({
      next: (response) =>{
        this.cartItems = response
        let totalItem = 0;
        response.map((pro) => {
          totalItem += pro.quantity;
        })
        this.totalItemsInCart = totalItem
      },
      complete: () =>{ },
      error: (error) =>{console.log(error)}
    })

    this.cartTotal =  this._cartService.getTotalPrice().getValue()
  }

  removeItemFromCart(product: Product){
    this._cartService.removeCartItem(product);
    this.cartTotal = this._cartService.getTotalPrice().getValue()
  }

  onCheckout(){
    this.router.navigate(['/billing'])
  }

  increment(product: Product){
    product.quantity += 1;
    this._cartService.changeQuantity(product);
    this.ngOnInit()
  }

  decrement(product: Product){
    if(product.quantity > 1){
      product.quantity -= 1;
      this._cartService.changeQuantity(product);
      this.ngOnInit()
    }
    
    
  }

  
}
