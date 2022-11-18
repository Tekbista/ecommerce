import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  baseUrl: string = 'http://localhost:8083/api/v1';
  constructor(private http: HttpClient) { }

  getProductsByCategory(categoryName: string, page: number, size: number):Observable<any>{
    return this.http.get(`${this.baseUrl}/products/category/${categoryName}?page=${page}&size=${size}`);
  }

  getCategories():Observable<any>{
    return this.http.get(`${this.baseUrl}/categories/`);
  }

  getNewArrivalProducts():Observable<any>{
    return this.http.get(`${this.baseUrl}/products/newarrival`);
  }

  getProductById(id: number): Observable<any>{
    return this.http.get(`${this.baseUrl}/products/${id}`);
  }

  getProductOnSale(): Observable<any>{
    return this.http.get(`${this.baseUrl}/products/onsale`)
  }
}
