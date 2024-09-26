import { Injectable } from '@angular/core';
import { CitiesCards } from './citiescards';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  url = "http://localhost:3000/locations";

  constructor() { }

  async getAllCities() : Promise<CitiesCards[]> {
    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getCityById(id: Number) : Promise<CitiesCards | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  } 

}
