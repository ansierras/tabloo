// import { City, cities, Country, countries } from 'src/constants/places';
// import { DbGameOffer, OfferOwner } from './interfaces';



// export class AppGameOffer {
//   key: string;
//   name: string;
//   shortName: string;
//   imageUrl: string;
//   thumbnailUrl: string;
//   price: number;
//   condition: number;
//   cityId: number;
//   owner: OfferOwner;
//   bggId: number;
//   description: string;
//   paymentMethod: number;
//   shrinkwrapped: boolean;
//   components: number[];

//   constructor(private dbGameOffer: DbGameOffer) {
//     this.key = dbGameOffer.key;
//     this.name = dbGameOffer.game.name;
//     this.imageUrl = dbGameOffer.game.imageUrl;
//     this.price = dbGameOffer.price;
//     this.condition = dbGameOffer.condition;
//     this.cityId = dbGameOffer.cityId;
//     this.owner = dbGameOffer.owner;
//     this.bggId = dbGameOffer.game.bggId;
//   }

//   getCity(): City {
//     return cities.find((c) => c.id === this.cityId);
//   }

//   getCountry(): Country {
//     return countries.find((c) => c.id === this.getCity().id);
//   }

//   getLocationString(): string {
//     return `${this.getCity().name}, ${this.getCountry().name}`;
//   }
// }
