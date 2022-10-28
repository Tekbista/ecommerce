import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-components',
  templateUrl: './payment-components.component.html',
  styleUrls: ['./payment-components.component.css']
})
export class PaymentComponentsComponent implements OnInit {

  payPalPay:boolean = false;
  cardPay: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onPayWithPayPal(){
    this.payPalPay = true;
    this.cardPay = false;
  }

  onPayWithCard(){
    this.payPalPay = false;
    this.cardPay = true;
  }
}
