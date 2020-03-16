export interface City {
  id: number;
  name: string;
  country: number;
}

export interface Country {
  id: number;
  name: string;
}

export const cities: City[] = [
  {
    id: 1,
    name: 'Medellín',
    country: 1
  },
  {
    id: 2,
    name: 'Bogotá',
    country: 1
  }
];

export const countries: Country[] = [
  {
    id: 1,
    name: 'Colombia'
  }
];
