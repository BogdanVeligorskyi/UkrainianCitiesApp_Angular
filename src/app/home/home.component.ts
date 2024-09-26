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
        <input type="text" #filter placeholder="Пошук за назвою міста" (input)="filterResults(filter.value)" >
      </form>
    </section>
    <section class="results">
      <app-cities-cards *ngFor="let citiesCards of filteredCitiesCardsList" [citiesCards]="citiesCards">
      </app-cities-cards>
    </section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  citiesCardsList: CitiesCards[] = [];
  citiesService: CitiesService = inject(CitiesService);
  filteredCitiesCardsList: CitiesCards[] = [];

  constructor() {
    this.citiesService.getAllCities().then((citiesCardsList: CitiesCards[]) => {
      this.citiesCardsList = citiesCardsList;
      this.filteredCitiesCardsList = citiesCardsList;
    }); 
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredCitiesCardsList = this.citiesCardsList;
    }
    this.filteredCitiesCardsList = this.citiesCardsList.filter(citiesCardsList => 
      citiesCardsList?.name.toLowerCase().includes(text.toLowerCase())
      || citiesCardsList?.region.toLowerCase().includes(text.toLowerCase())
      || citiesCardsList?.oldnames.toLowerCase().includes(text.toLowerCase()));
  }
}
