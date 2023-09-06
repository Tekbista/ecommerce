import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  
  cartItemList: Product[] = [];
  productList = new BehaviorSubject<Product[]>([]);
  cartTotal = new BehaviorSubject<number>(0);
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
      localStorage.setItem("cart-items", JSON.stringify(this.cartItemList));
    }

    this.cartItemList = JSON.parse(localStorage.getItem("cart-items") || "[]");
    let found = this.cartItemList.find((item) => {
      if(item.productId === product.productId){
        item.quantity += product.quantity;
      }
      return item.productId === product.productId
    })
    if(!found){
      this.cartItemList.push(product);
    }

    this.productList.next(this.cartItemList);
    localStorage.setItem("cart-items", JSON.stringify(this.cartItemList));
    
    this.getTotalPrice();
  }
  
  getTotalPrice(): BehaviorSubject<number>{
    let grandTotal = 0;
    this.cartItemList.map((product: Product) =>{
      grandTotal += ((product.price - product.discountPrice) * product.quantity)
    })
    this.cartTotal.next(grandTotal)
    return this.cartTotal;
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

  changeQuantity(product: Product){
    this.cartItemList = JSON.parse(localStorage.getItem("cart-items") || "[]");
    this.cartItemList.find((item) => {
      if(item.productId === product.productId){
        item.quantity = product.quantity;
      }
    })
    
    this.productList.next(this.cartItemList);
    localStorage.setItem("cart-items", JSON.stringify(this.cartItemList));
    
    this.getTotalPrice();
  }
}
