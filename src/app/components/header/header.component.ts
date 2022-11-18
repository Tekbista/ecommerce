import { Component, Input, OnInit } from '@angular/core';
import { CartServiceService } from 'src/app/services/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalItemOnCart!: number;
  constructor(private _cartService: CartServiceService) { }

  ngOnInit(): void {
    this._cartService.getProducts().subscribe((res) =>{
      this.totalItemOnCart = res.length;
    })
  }

}
