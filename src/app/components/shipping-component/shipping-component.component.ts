import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Address } from 'src/app/models/address';

@Component({
  selector: 'app-shipping-component',
  templateUrl: './shipping-component.component.html',
  styleUrls: ['./shipping-component.component.css']
})
export class ShippingComponentComponent implements OnInit {

  sameAsBillingAddress: boolean = true;
  shipToDifferentAddress: boolean = false;
  shippingForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initializeShippingForm();
  }

  onShipToDifferentAddress(){
    this.shipToDifferentAddress = true;
    this.sameAsBillingAddress = false;
  }

  onSameAsBillingAddress(){
    this.shipToDifferentAddress = false;
    this.sameAsBillingAddress = true;
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
