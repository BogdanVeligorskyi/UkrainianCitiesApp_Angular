import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `<h1>Hello World!</h1>
            <img src="../assets/logo.png">`,
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'ukrainian-cities-app';
}

