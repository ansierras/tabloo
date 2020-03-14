import { Component, OnInit } from '@angular/core';
import { AppGameOffer } from 'src/models/app-game.class';
import { OffersService } from 'src/services/offers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {
  gameOffers: AppGameOffer[];

  constructor(
    private offersService: OffersService,
    private activatedRoute: ActivatedRoute
    ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.offersService.getOffersWithId(Number(params['id'])).subscribe(offers => {
        this.gameOffers = offers;
      });
    });
  }
}
