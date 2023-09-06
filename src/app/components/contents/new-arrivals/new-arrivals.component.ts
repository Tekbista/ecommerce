import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-new-arrivals',
  templateUrl: './new-arrivals.component.html',
  styleUrls: ['./new-arrivals.component.css']
})
export class NewArrivalsComponent implements OnInit {
  products : Product[] = [];
  constructor(private _productService: ProductServiceService, private router: Router) { }

  ngOnInit(): void {
    this._productService.getNewArrivalProducts().subscribe({
      next: (response) =>  {
        this.products = response;  
      },
      complete: () => {},
      error: (error) => {
        console.log(error);
      }
    })
  }


  redirect(id: any){
    this.router.navigate(["/pdp/" + id]);
  }

}
