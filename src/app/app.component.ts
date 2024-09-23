import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <input type="image" class=app-logo src="../assets/logo.png">
      </header>
      <section class="content">
        <app-home></app-home>
        <!-- <router-outlet></router-outlet> -->
      </section>
    </main>`,
  imports: [HomeComponent],
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'ukrainian-cities-app';
}

