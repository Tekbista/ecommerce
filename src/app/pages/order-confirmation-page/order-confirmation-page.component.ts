import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/services/order-service.service';

@Component({
  selector: 'app-order-confirmation-page',
  templateUrl: './order-confirmation-page.component.html',
  styleUrls: ['./order-confirmation-page.component.css']
})
export class OrderConfirmationPageComponent implements OnInit {

  orderId: string  = 'DUMMY ID';
  constructor(private _orderService: OrderServiceService) { }

  ngOnInit(): void {
    this.orderId = this._orderService.getTransactionId();
  }

}
