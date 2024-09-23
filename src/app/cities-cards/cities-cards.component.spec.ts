import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesCardsComponent } from './cities-cards.component';

describe('CitiesCardsComponent', () => {
  let component: CitiesCardsComponent;
  let fixture: ComponentFixture<CitiesCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CitiesCardsComponent]
    });
    fixture = TestBed.createComponent(CitiesCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
