import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {

  quantity = 1;
  
  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.quantity = this.quantity + 1;
    
  }

  decrement(){
    if(this.quantity > 1){
      this.quantity = this.quantity - 1;
    }
    
  }

}
