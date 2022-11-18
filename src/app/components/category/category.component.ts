import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  filter:boolean = false;
  currentPath = this.router.url
  @Output() emiter = new EventEmitter<Boolean>()
  products:Product[] = [];
  categoryName: string = "";
  page: number = 0;
  size: number = 8;
  noOfPage: number = 0;
  currentPage: number = 0;

  constructor(private router: Router, private _productService: ProductServiceService, private aroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.categoryName = this.aroute.snapshot.paramMap.get("name")!;
    this.loadProductByPage(this.page);
  }

  showMenu(){
    this.emiter.emit(!this.filter);
  }


  counter(i: number) {
    return new Array(i);
  }

  loadProductByPage(page: number){
    this.currentPage = page;
    this._productService.getProductsByCategory(this.categoryName, page, this.size).subscribe({
      next: (response) =>  {
        this.products = response.products;
        this.noOfPage = response.totalPage;
        
      },
      complete: () => {},
      error: (error) => {
        console.log(error);
      }
    })
  }
}
