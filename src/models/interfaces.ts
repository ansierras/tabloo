export interface DbGame {
  bggId: number;
  name: string;
  imageUrl: string;
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
}
