import { AppGameOffer } from 'src/models/app-game.class';
import { DbGame, DbGameOffer, OfferOwner } from 'src/models/interfaces';

const owner1: OfferOwner = {
  name: 'John',
  lastName: 'Smith',
  avatarUrl: `https://robohash.org/1234`
};
const owner2: OfferOwner = {
  name: 'Andres',
  lastName: 'Sierra',
  avatarUrl: `https://robohash.org/2345`
};
const dbGame1: DbGameOffer = {
  game: {
    bggId: 1,
    name: 'Game Name',
    imageUrl: 'https://cf.geekdo-images.com/original/img/WQS7FRLHzvFQ8mjt94Au4W8CYn0=/0x0/pic831744.jpg',
  },
  key: 'soekey',
  price: 200000,
  cityId: 1,
  owner: owner1,
  condition: 10
};
const dbGame2: DbGameOffer = {
  game: {
    bggId: 2,
    name: 'Another Name',
    imageUrl: 'https://cf.geekdo-images.com/original/img/k4JCDnjnu5YRn5QA8njFeRMbulk=/0x0/pic3209553.jpg',
  },
  key: 'otherkey',
  price: 250000,
  cityId: 1,
  owner: owner1,
  condition: 10
};

const dbGame3: DbGameOffer = {
  game: {
    bggId: 2,
    name: 'Another Name',
    imageUrl: 'https://cf.geekdo-images.com/original/img/k4JCDnjnu5YRn5QA8njFeRMbulk=/0x0/pic3209553.jpg',
  },
  key: 'otherkey',
  price: 230000,
  cityId: 1,
  owner: owner2,
  condition: 8
};

export const dummyGames: AppGameOffer[] = [
  new AppGameOffer(dbGame1),
  new AppGameOffer(dbGame2),
  new AppGameOffer(dbGame3),
];

