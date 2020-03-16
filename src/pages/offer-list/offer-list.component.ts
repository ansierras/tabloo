import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/services/offers.service';
import { ActivatedRoute } from '@angular/router';
import { AppGameOffer } from 'src/models/interfaces';
import { ConstantHelper } from 'src/services/constant-helper.service';

@Component({
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent implements OnInit {
  gameOffers: AppGameOffer[];

  constructor(
    private offersService: OffersService,
    private activatedRoute: ActivatedRoute,
    public constantHelper: ConstantHelper
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
