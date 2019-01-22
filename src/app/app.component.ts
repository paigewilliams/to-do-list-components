import { Component } from '@angular/core';

@Component({
  selector: 'crazy-app-selector',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentFocus: string = 'Angular Homework';
}
