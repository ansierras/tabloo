export interface DbGame {
  bggId: number;
  name: string;
  imageUrl: string;
  thumbnailUrl: string;
}

export interface User {
  key?: string;
  name: string;
  lastName: string;
  avatarUrl: string;
  role: string;
  state: string;
  cityId: number;
}

export interface OfferOwner {
  name: string;
  lastName: string;
  avatarUrl: string;
}

export interface DbGameOffer {
  key: string;
  game: DbGame;
  price: number;
  cityId: number;
  condition: number;
  owner: OfferOwner;
  description: string;
  paymentMethod: number;
  shrinkwrapped: boolean;
}

export interface BggGame {
  id: number;
  name: string;
  imgUrl: string;
  yearPublished: number;
  thumbnailUrl: string;
}

export interface AppGameOffer {
  key: string;
  name: string;
  shortName: string;
  imageUrl: string;
  thumbnailUrl: string;
  price: number;
  condition: number;
  cityId: number;
  owner: OfferOwner;
  bggId: number;
  description: string;
  paymentMethod: number;
  shrinkwrapped: boolean;
}
