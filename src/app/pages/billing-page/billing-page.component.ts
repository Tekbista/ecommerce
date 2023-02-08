import { Component, OnInit } from '@angular/core';
import { CheckoutSteps } from 'src/app/models/checkout-steps';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.css']
})
export class BillingPageComponent implements OnInit {
  
  currentStep = CheckoutSteps.Billing;
  btnTitle: string = "Continue";
  cartTotal: number = 0;
  totalItemsInCart: number = 0;
  border = "2px solid rgb(189, 189, 203)";
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

  getCurrentStep(data: any){
    this.currentStep = data;
    if(this.currentStep === CheckoutSteps.Payment){
      this.btnTitle = "Palce Order";
    }
  }

}
