import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-filter-menu',
  templateUrl: './filter-menu.component.html',
  styleUrls: ['./filter-menu.component.css']
})
export class FilterMenuComponent implements OnInit {

  @Input() filter!: boolean;
  @Output() emiter = new EventEmitter<Boolean>()

  constructor() { }

  ngOnInit(): void {
  }

  closeMenu(){
    this.filter = false;
    this.emiter.emit(this.filter)
  }

}
