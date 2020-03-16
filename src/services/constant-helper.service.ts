import { Injectable } from '@angular/core';
import { City, cities, countries, Country } from 'src/constants/places';

@Injectable()
export class ConstantHelper {

  getCity(cityId: number): City {
    return cities.find((c) => c.id === cityId);
  }

  getCountry(cityId: number): Country {
    return countries.find((c) => c.id === this.getCity(cityId).id);
  }

  getLocationString(cityId: number): string {
    return `${this.getCity(cityId).name}, ${this.getCountry(cityId).name}`;
  }
}
