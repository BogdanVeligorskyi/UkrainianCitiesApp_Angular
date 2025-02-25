import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: `
    <main>
      <header class="brand-name">
        <input type="image" class=app-logo src="../assets/logo_1.png" [routerLink]="['/']">
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
      <footer>
		    <label id="footerDiv" align="center">
		    	Богдан Велігорський. 2024
		    </label>
	    </footer>  
    </main>`,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule],

})

export class AppComponent {
  title = 'ukrainian-cities-app';
}

