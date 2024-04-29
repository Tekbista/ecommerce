import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  keyword: any = ''
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  

  onSearch(){
    let url = `/category/Search?q=${this.keyword}`
    this.router.navigateByUrl(url)
  }

}
