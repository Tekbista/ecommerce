import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-billing-component',
  templateUrl: './billing-component.component.html',
  styleUrls: ['./billing-component.component.css']
})
export class BillingComponentComponent implements OnInit {

  billingForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.initializeLoginForm();
  }

  onSubmit(){
    console.log(this.billingForm.value)
  }

  initializeLoginForm(){
    this.billingForm = new FormGroup ({
      email: new FormControl('', [Validators.required, Validators.email]),
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

  isBillingFormValid(){
    return this.billingForm.valid;
  }

}
