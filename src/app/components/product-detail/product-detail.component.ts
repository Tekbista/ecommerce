import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartServiceService } from 'src/app/services/cart-service.service';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = new Product(0, '', 0, 0, '', '', false);
  productId?: number;
  productQuantity: number = 1;
  

  constructor(
    private _productService: ProductServiceService,
    private route: ActivatedRoute,
    private _cartService: CartServiceService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.productId = Number(this.route.snapshot.paramMap.get("id"));
    this._productService.getProductById(this.productId).subscribe({
      next: (response) =>{
        this.product = response;
      },
      complete: () =>{console.log(this.product)},
      error:(error) =>{console.log(error)}
    })
  }

  addToCart(product: Product){
    this._cartService.addToCart(product);
  }

  proceedToCheckout(){
    this.router.navigate(['/cart'])
  }
}
