import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesCardsComponent } from '../cities-cards/cities-cards.component';
import { CitiesCards } from '../citiescards';
import { CitiesService } from '../cities.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, CitiesCardsComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Пошук за назвою міста">
      </form>
    </section>
    <section class="results">
      <app-cities-cards *ngFor="let citiesCards of citiesCardsList" [citiesCards]="citiesCards">
      </app-cities-cards>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  citiesCardsList: CitiesCards[] = [];
  citiesService: CitiesService = inject(CitiesService);

  constructor() {
    this.citiesCardsList = this.citiesService.getAllCities();
  }
}
