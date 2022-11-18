import { Component, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.css']
})
export class BillingPageComponent implements OnInit {

  order: string = "Place Order";
  cartTotal: number = 0;
  totalItemsInCart: number = 0;
  tax: number = 0;
  constructor(private _cartService: CartServiceService) { }

  ngOnInit(): void {
    this._cartService.getProducts().subscribe({
      next: (response) =>{
        this.totalItemsInCart = response.length;
      },
      complete: () =>{},
      error: (error) =>{console.log(error)}
    })

    this.cartTotal = this._cartService.getTotalPrice();
    this.tax = 0.07 * this.cartTotal;
  }

}
