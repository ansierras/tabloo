import { Component, OnInit } from '@angular/core';
import { OffersService } from 'src/services/offers.service';
import { ActivatedRoute } from '@angular/router';
import { AppGameOffer } from 'src/models/interfaces';
import { ConstantHelper } from 'src/services/constant-helper.service';

@Component({
  templateUrl: './offer-detail.component.html'
})
export class OfferDetailComponent implements OnInit {
  offer: AppGameOffer;
  constructor(
    private offersService: OffersService,
    private activatedRoute: ActivatedRoute,
    public constantHelper: ConstantHelper) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.offersService.getOfferDetails(params['key']).subscribe(offer => {
        this.offer = offer;
      });
    });
  }
}
