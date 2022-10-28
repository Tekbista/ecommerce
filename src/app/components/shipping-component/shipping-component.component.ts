import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-component',
  templateUrl: './shipping-component.component.html',
  styleUrls: ['./shipping-component.component.css']
})
export class ShippingComponentComponent implements OnInit {

  shipToExistingAddress: boolean = true;
  shipToDifferentAddress: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onShipToDifferentAddress(){
    this.shipToDifferentAddress = true;
    this.shipToExistingAddress = false;
  }

  onShipToExistingAddress(){
    this.shipToDifferentAddress = false;
    this.shipToExistingAddress = true;
  }
}
