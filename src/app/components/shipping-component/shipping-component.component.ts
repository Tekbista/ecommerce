import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping-component',
  templateUrl: './shipping-component.component.html',
  styleUrls: ['./shipping-component.component.css']
})
export class ShippingComponentComponent implements OnInit {

  shipToExistingAddress: boolean = true;
  shipToDifferentAddress: boolean = false;
  shippingForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initializeShippingForm();
  }

  onShipToDifferentAddress(){
    this.shipToDifferentAddress = true;
    this.shipToExistingAddress = false;
  }

  onShipToExistingAddress(){
    this.shipToDifferentAddress = false;
    this.shipToExistingAddress = true;
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
