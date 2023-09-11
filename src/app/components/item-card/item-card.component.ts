import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.css']
})
export class ItemCardComponent implements OnInit {

  @Input() product!: Product;
  productImage!: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.productImage = this.product.image.find((img) => img.isPrimary === true)?.url
  }
}
