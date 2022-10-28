import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  filter:boolean = false;
  currentPath = this.router.url
  @Output() emiter = new EventEmitter<Boolean>()

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showMenu(){
    this.emiter.emit(!this.filter);
  }

  redirect(){
    this.router.navigate(["/pdp"])
  }
}
