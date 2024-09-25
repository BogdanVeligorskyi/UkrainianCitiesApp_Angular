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
          <img class="details-photo" [src]="citiesCards?.photos?.[i]">
        </section>
      </section>
      <section class="details-description">
        <p class=>{{citiesCards?.description}}</p>
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
    this.citiesCards = this.citiesService.getCityById(cityCardId);
  }

}
