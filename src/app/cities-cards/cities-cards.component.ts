import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesCards } from '../citiescards';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cities-cards',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="city-info">
      <img class="city-image" [src]="citiesCards.photos[0]">
      <h2 class="city-heading">{{citiesCards.name}}</h2>
      <p class="city-region">{{citiesCards.region}}</p>
      <p class="city-population">Кількість населення, осіб: {{citiesCards.population}}</p>
      <p class="city-year">Рік заснування (першої згадки): {{citiesCards.year}}</p>
      <p class="city-oldnames">Старі назви: {{citiesCards.oldnames}}</p>
      <a [routerLink]="['/details', citiesCards.id]">Детальніше</a>
    </section>
  `,
  styleUrls: ['./cities-cards.component.css']
})

export class CitiesCardsComponent {
  @Input() citiesCards!:CitiesCards;
}
