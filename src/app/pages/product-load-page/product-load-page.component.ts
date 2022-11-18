import { Component, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-load-page',
  templateUrl: './product-load-page.component.html',
  styleUrls: ['./product-load-page.component.css']
})
export class ProductLoadPageComponent implements OnInit {

 
  filter!:boolean;
  constructor(private route: Router) { 
    this.route.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
  }

  changeFilter(event:any){
    console.log(event)
    this.filter = event;
  }
  
}
