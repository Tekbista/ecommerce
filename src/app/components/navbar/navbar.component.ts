import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories: Category[] = [];
  constructor(private _productService: ProductServiceService) { }

  ngOnInit(): void {
    this._productService.getCategories().subscribe({
      next: (response) =>  {
        this.categories = response;
      },
      complete: () => {},
      error: (error) => {
        console.log(error);
      }
    })
  }

}
