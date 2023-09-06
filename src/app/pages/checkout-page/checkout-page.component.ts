import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Address } from 'src/app/models/address';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { OrderServiceService } from 'src/app/services/order-service.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit {

  shippingForm!: FormGroup;
  shippingAddress!: Address;
  cartTotal: number = 0;
  totalItemsInCart: number = 0;
  border = "2px solid rgb(189, 189, 203)";
  tax: number = 0;
  totalAfterTax = 0.00;
  
  @ViewChild('paymentRef', {static:true}) paymentRef!: ElementRef;


  constructor(
    private _cartService: CartServiceService, 
    private _orderService: OrderServiceService, 
    private router: Router,
    private zone: NgZone
    ) { }

  ngOnInit(): void {
    this.initializeShippingForm();
    
    this._cartService.getProducts().subscribe({
      next: (response) =>{
        this.totalItemsInCart = response.length;
      },
      complete: () =>{},
      error: (error) =>{console.log(error)}
    })

    this.cartTotal = this._cartService.getTotalPrice().getValue();
    this.tax = 0.07 * this.cartTotal;
    this.totalAfterTax = this.cartTotal + this.tax;

    window.paypal.Buttons(
      {
        createOrder: (data: any, actions: any) =>{
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: this.totalAfterTax.toFixed(2).toString(),
                  currency_code: 'USD'
                }
              }
            ]
          })
        },

        onApprove: (data: any, actions: any) =>{
          return actions.order.capture().then((res: any) => {
            if(res.status === 'COMPLETED'){
              this._orderService.setTransactionId(res.id);
              this.zone.run(() => {
                this.router.navigate(['order-confirm']);
            });
            }
          })
        },

        onError: (err: any) => {
          console.log(err)
        }
      }
    ).render(this.paymentRef.nativeElement)
  }

  initializeShippingForm(){
    this.shippingForm = new FormGroup ({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address1: new FormControl('', [Validators.required]),
      address2: new FormControl(''),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      zipCode: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{10}$')])
    })
  }

}
