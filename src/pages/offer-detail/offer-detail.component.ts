import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/services/offers.service';
import { AppGameOffer } from 'src/models/app-game.class';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './offer-detail.component.html'
})
export class OfferDetailComponent implements OnInit {
  offer: AppGameOffer;
  constructor(
    private offersService: OffersService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.offersService.getOfferDetails(params['key']).subscribe(offer => {
        this.offer = offer;
      });
    });
  }
}
