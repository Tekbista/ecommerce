import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-load-page',
  templateUrl: './product-load-page.component.html',
  styleUrls: ['./product-load-page.component.css']
})
export class ProductLoadPageComponent implements OnInit {

 
  filter!:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  changeFilter(event:any){
    console.log(event)
    this.filter = event;
  }
  
}
