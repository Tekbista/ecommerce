import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BillingComponentComponent } from 'src/app/components/billing-component/billing-component.component';
import { PaymentComponentsComponent } from 'src/app/components/payment-components/payment-components.component';
import { ShippingComponentComponent } from 'src/app/components/shipping-component/shipping-component.component';
import { Address } from 'src/app/models/address';
import { CheckoutSteps } from 'src/app/models/checkout-steps';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-billing-page',
  templateUrl: './billing-page.component.html',
  styleUrls: ['./billing-page.component.css']
})
export class BillingPageComponent implements OnInit {
  @ViewChild(BillingComponentComponent) billingComp!: BillingComponentComponent;
  @ViewChild(ShippingComponentComponent) shippingComp!: ShippingComponentComponent;
  @ViewChild(PaymentComponentsComponent) paymentComp!: PaymentComponentsComponent;
  billingAddress!: Address;
  shippingAddress!: Address;

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

  onContinue(){
    if(this.currentStep  === 1 && this.billingComp.billingForm.valid ){
      // this.billingAddress.address1 = this.billingComp.billingForm.get('address1')?.value;
      // this.billingAddress.address2 = this.billingComp.billingForm.get('address2')?.value;
      // this.billingAddress.city = this.billingComp.billingForm.get('city')?.value;
      // this.billingAddress.state = this.billingComp.billingForm.get('state')?.value;
      // this.billingAddress.zipCode = this.billingComp.billingForm.get('zipCode')?.value;
      console.log(this.billingComp.billingForm.value)
      this.currentStep++;
    }
    if(this.currentStep  === 2 && this.shippingComp.shippingForm.valid){
      this.currentStep++;
    }

    if(this.currentStep  === 3 && this.paymentComp.paymentForm.valid ){
      this.currentStep++;
    }
  }

}
