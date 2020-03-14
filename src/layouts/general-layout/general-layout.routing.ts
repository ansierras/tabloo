import { Routes } from '@angular/router';
import { GeneralLayoutComponent } from './general-layout.component';
import { MarketComponent } from 'src/pages/market/market.component';
import { OfferListComponent } from 'src/pages/offer-list/offer-list.component';
import { OfferDetailComponent } from 'src/pages/offer-detail/offer-detail.component';
import { CreateOfferComponent } from 'src/pages/create-offer/create-offer.component';

export const GeneralLayoutRoutes: Routes = [
  {path: '', component: GeneralLayoutComponent, children: [
    // {
    //   path: '',
    //   redirectTo: 'market',
    //   pathMatch: 'full',
    // },
    { path: 'market', component:  MarketComponent },
    { path: 'list/:id', component: OfferListComponent },
    { path: 'detail/:key', component: OfferDetailComponent },
    { path: 'newoffer', component: CreateOfferComponent },
  ]},
];
