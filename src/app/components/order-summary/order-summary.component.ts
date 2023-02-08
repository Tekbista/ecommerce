import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { CheckoutSteps } from 'src/app/models/checkout-steps';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {

  @Input() totalItemsInCart: number = 0;
  @Input() cartTotal: number = 0;
  @Input() buttonTitle: string = "";
  @Input() tax: number = 0;
  @Output() currentTab = new EventEmitter<number>();
  currentStep: number = CheckoutSteps.Billing;
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.currentStep)
  }

  onContinue(){
    if(this.currentStep < 3){
      this.currentStep++;
      this.currentTab.emit(this.currentStep);
      console.log(this.currentStep)
    }
    
  }
}
