import { Injectable } from '@angular/core';
import { dummyGames } from 'src/constants/dummy-data';
import { Observable, of } from 'rxjs';
import { AppGameOffer, DbGameOffer } from 'src/models/interfaces';
import { UserService } from './user.service';

@Injectable()
export class OffersService {

  constructor(
    private userService: UserService
  ) {}

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
