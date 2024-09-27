import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CitiesService } from '../cities.service';
import { CitiesCards } from '../citiescards';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article>
      <section>
        <h1 class="details-header">{{citiesCards?.name}}</h1>
      </section>
      <section class="details-photos-section">
        <section *ngFor="let index of citiesCards?.photos; index as i">
          <img class="details-photo" [title]="citiesCards?.photos?.[i]?.name" [src]="citiesCards?.photos?.[i]?.file">
        </section>
        <h2 class="landmarks-heading">Визначні місця</h2>
        <ul>
          <li *ngFor="let landmarks of citiesCards?.landmarks;">{{landmarks}}</li>
        </ul>
      </section>
      <section class="details-description">
        <p>{{citiesCards?.short_description}}</p>
        <h2>Історія</h2>
        <p>{{citiesCards?.history_description}}</p>
        <h2>Геологія та кліматичні умови</h2>
        <p>{{citiesCards?.climate_description}}</p>
        <h2>Районування</h2>
        <p>{{citiesCards?.districts_description}}</p>
        <h2>Економіка та соціальний склад</h2>
        <p>{{citiesCards?.economics_description}}</p>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  citiesService = inject(CitiesService);
  citiesCards: CitiesCards | undefined;

  constructor() {
    const cityCardId = Number(this.route.snapshot.params['id']);
    this.citiesService.getCityById(cityCardId).then(citiesCards => {
      this.citiesCards = citiesCards;
    });
  }

}
