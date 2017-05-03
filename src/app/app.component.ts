import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isClosed = false;

  onSidebarToggled(toggle) {
    this.isClosed = toggle;
    console.log(this.isClosed);
  }
}
