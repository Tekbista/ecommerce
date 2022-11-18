import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  
  cartItemList: Product[] = [];
  productList = new BehaviorSubject<Product[]>([]);

  constructor(){}

  getProducts(): Observable<Product[]>{
    this.cartItemList = JSON.parse(localStorage.getItem("cart-items") || "[]");
    this.productList.next(this.cartItemList)
    return this.productList;
  }

  setProduct(products: Product[]){
    this.cartItemList.push(...products)
    this.productList.next(products)
  }

  addToCart(product: Product){
    if(localStorage.getItem("cart-items") === null){
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      localStorage.setItem("cart-items", JSON.stringify(this.cartItemList));
    }else{
      this.cartItemList = JSON.parse(localStorage.getItem("cart-items") || "[]");
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      localStorage.setItem("cart-items", JSON.stringify(this.cartItemList));
    }
    
    this.getTotalPrice();
  }
  
  getTotalPrice(): number{
    let grandTotal = 0;
    this.cartItemList.map((product: Product) =>{
      grandTotal += (product.price - product.discountPrice)
    })
    return grandTotal;
  }

  removeCartItem(product: Product){
    this.cartItemList = JSON.parse(localStorage.getItem("cart-items") || "[]");
    this.cartItemList.map((pro: Product, index:any) =>{
      if(product.productId === pro.productId){
        this.cartItemList.splice(index, 1);
      }
    })
    this.productList.next(this.cartItemList);
    localStorage.setItem("cart-items", JSON.stringify(this.cartItemList));
  }

  clearCart(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
}
