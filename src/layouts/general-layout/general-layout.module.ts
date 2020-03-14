import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { GeneralLayoutComponent } from './general-layout.component';
import { NgModule } from '@angular/core';
import { GeneralLayoutRoutes } from './general-layout.routing';
import { MarketComponent } from 'src/pages/market/market.component';
import { OffersService } from 'src/services/offers.service';
import { OfferListComponent } from 'src/pages/offer-list/offer-list.component';
import { OfferDetailComponent } from 'src/pages/offer-detail/offer-detail.component';
import { BggService } from 'src/services/bgg.service';
import { CreateOfferComponent } from 'src/pages/create-offer/create-offer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GeneralLayoutRoutes),
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    GeneralLayoutComponent,
    MarketComponent,
    OfferListComponent,
    OfferDetailComponent,
    CreateOfferComponent
  ],
  providers: [
    OffersService,
    BggService
  ]
})

export class GeneralLayoutModule {}
