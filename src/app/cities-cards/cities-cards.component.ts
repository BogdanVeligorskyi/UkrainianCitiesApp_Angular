import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitiesCards } from '../citiescards';

@Component({
  selector: 'app-cities-cards',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="city-info">
      <img class="city-image" [src]="citiesCards.photos[0]">
      <h2 class="city-heading">{{citiesCards.name}}</h2>
      <p class="city-region">{{citiesCards.region}}</p>
    </section>
  `,
  styleUrls: ['./cities-cards.component.css']
})

export class CitiesCardsComponent {
  @Input() citiesCards!:CitiesCards;
}
