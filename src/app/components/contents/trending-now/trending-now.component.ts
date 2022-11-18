import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-trending-now',
  templateUrl: './trending-now.component.html',
  styleUrls: ['./trending-now.component.css']
})
export class TrendingNowComponent implements OnInit {

  onSale: Product[] = [];
  constructor(private _productService: ProductServiceService) { }

  ngOnInit(): void {
    this._productService.getProductOnSale().subscribe({
      next:(response) =>{
        this.onSale = response;
      },
      complete: () =>{},
      error: () =>{}
    })
  }

}
