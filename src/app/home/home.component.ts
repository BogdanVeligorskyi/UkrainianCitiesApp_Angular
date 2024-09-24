import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesCardsComponent } from '../cities-cards/cities-cards.component';
import { CitiesCards } from '../citiescards';

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
  citiesCardsList: CitiesCards[] = [
    {
      "id": 0,
      "name": "Чернігів",
      "region": "Чернігівська область",
      "year": 907,
      "population": 280000.0,
      "oldnames": "-",
      "photos": ["../assets/chernihiv_2.jpg", "../assets/chernihiv_1.jpg", "../assets/chernihiv_3.jpg", "../assets/chernihiv_4.jpg"],
      "description": "Одне з провідних міст Київської Русі",
      "landmarks": [],
    },
    {
      "id": 1,
      "name": "Чернігів",
      "region": "Чернігівська область",
      "year": 907,
      "population": 280000.0,
      "oldnames": "-",
      "photos": ["../assets/chernihiv_1.jpg", "../assets/chernihiv_2.jpg", "../assets/chernihiv_3.jpg", "../assets/chernihiv_4.jpg"],
      "description": "Одне з провідних міст Київської Русі",
      "landmarks": [],
    },
  ];
}
