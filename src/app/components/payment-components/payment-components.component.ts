import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-components',
  templateUrl: './payment-components.component.html',
  styleUrls: ['./payment-components.component.css']
})
export class PaymentComponentsComponent implements OnInit {

  payPalPay:boolean = false;
  cardPay: boolean = true;
  paymentForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initializePaymentForm();
  }

  onPayWithPayPal(){
    this.payPalPay = true;
    this.cardPay = false;
  }

  onPayWithCard(){
    this.payPalPay = false;
    this.cardPay = true;
  }

  initializePaymentForm(){
    this.paymentForm = new FormGroup({
      cardNumber: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{16}$')]),
      cardType: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      expMonth: new FormControl('', [Validators.required]),
      expYear: new FormControl('', [Validators.required]),
      securityCode: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{3}')])
    })
  }
}
