import { Injectable } from '@angular/core';
import { AppGameOffer } from 'src/models/app-game.class';
import { dummyGames } from 'src/constants/dummy-data';
import { Observable, of } from 'rxjs';

@Injectable()
export class OffersService {

getAllOffers(): Observable<AppGameOffer[]> {
  return of(dummyGames);
}

getOffersWithId(id: number): Observable<AppGameOffer[]> {
  return of(dummyGames.filter(g => g.bggId === id));
}

getOfferDetails(key: string): Observable<AppGameOffer> {
  return of(dummyGames.find(g => g.key === key));
}

}
