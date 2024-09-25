import { Injectable } from '@angular/core';
import { CitiesCards } from './citiescards';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  protected citiesCardsList: CitiesCards[] = [
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
      "name": "Київ",
      "region": "Київська область",
      "year": 482,
      "population": 2000000.0,
      "oldnames": "-",
      "photos": ["../assets/kyiv_1.jpg", "../assets/kyiv_2.jpg", "../assets/kyiv_3.jpg", "../assets/kyiv_4.jpg"],
      "description": "Одне з провідних міст Київської Русі",
      "landmarks": [],
    },
    {
      "id": 2,
      "name": "Харків",
      "region": "Харківська область",
      "year": 1654,
      "population": 1300000.0,
      "oldnames": "-",
      "photos": ["../assets/kharkiv_1.jpg", "../assets/kharkiv_2.jpg", "../assets/kharkiv_3.jpg", ""],
      "description": "",
      "landmarks": [],
    },
    {
      "id": 3,
      "name": "Житомир",
      "region": "Житомирська область",
      "year": 882,
      "population": 200000.0,
      "oldnames": "-",
      "photos": ["../assets/zhytomyr_1.jpg", "../assets/zhytomyr_2.jpg", "", ""],
      "description": "Місто, якого не існує",
      "landmarks": [],
    },
    {
      "id": 4,
      "name": "Львів",
      "region": "Львівська область",
      "year": 1100,
      "population": 700000.0,
      "oldnames": "-",
      "photos": ["../assets/lviv_1.jpg", "../assets/lviv_2.jpg", "../assets/lviv_3.jpg", "../assets/lviv_4.jpg"],
      "description": "Одне з найрозвинутіших міст Заходу України",
      "landmarks": [],
    },
    {
      "id": 5,
      "name": "Ужгород",
      "region": "Закарпатська область",
      "year": 1200,
      "population": 700000.0,
      "oldnames": "-",
      "photos": ["../assets/uzhgorod_1.jpg", "../assets/uzhgorod_2.jpg", "", ""],
      "description": "Одне з найрозвинутіших міст Заходу України",
      "landmarks": [],
    },
    {
      "id": 6,
      "name": "Одеса",
      "region": "Одеська область",
      "year": 1200,
      "population": 700000.0,
      "oldnames": "Хаджибей",
      "photos": ["../assets/odessa_1.jpg", "../assets/odessa_2.jpg", "../assets/odessa_3.jpg", ""],
      "description": "Одне з найрозвинутіших міст Півдня України",
      "landmarks": [],
    },
  ];

  constructor() { }

  getAllCities() : CitiesCards[] {
    return this.citiesCardsList;
  }

  getCityById(id: Number) : CitiesCards | undefined {
    return this.citiesCardsList.find(citiesCards => citiesCards.id === id);
  } 

}
