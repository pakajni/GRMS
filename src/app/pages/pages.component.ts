import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
 
  @Output() sidebarToggled = new EventEmitter<boolean>();
  isClosed = false;
  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
      this.isClosed = !this.isClosed;
      this.sidebarToggled.emit(this.isClosed);
      console.log('event emitted with '+this.isClosed);
      
  }


}
