import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  checkout(){
    this.router.navigate(["/billing"]);
  }
}
