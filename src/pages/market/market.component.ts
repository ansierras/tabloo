import { Component, OnInit } from '@angular/core';
import { DbGame, AppGameOffer } from 'src/models/interfaces';
import { OffersService } from 'src/services/offers.service';

@Component({
  templateUrl: './market.component.html'
})
export class MarketComponent implements OnInit {
  games: {game: DbGame, count: number}[] ;

  constructor(private offersService: OffersService) {}

  ngOnInit(): void {
    this.offersService.getAllOffers().subscribe(offers => {
      this.games = this.groupByGame(offers);
    });
  }

  groupByGame(games: AppGameOffer[]): {game: DbGame, count: number}[] {
    const result: {game: DbGame, count: number}[] = [];
    games.map((g) => {
      const resGame = result.find(rg => rg.game.bggId === g.bggId);
      if (resGame) {
        resGame.count++;
      } else {
        result.push({
          game: g,
          count: 1
        });
      }
    });
    return result;
  }
}
