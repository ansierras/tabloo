import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { ConstantHelper } from 'src/services/constant-helper.service';
import { ProfileComponent } from 'src/pages/profile/profile.component';
import { ShowProfileComponent } from 'src/pages/profile/show/show-profile.component';
import { EditProfileComponent } from 'src/pages/profile/edit/edit-profile.component';
import { WelcomeProfileComponent } from 'src/pages/profile/welcome/welcome-profile.component';
import { ActiveUserGuard } from 'src/guards/active-user.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GeneralLayoutRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    GeneralLayoutComponent,
    MarketComponent,
    OfferListComponent,
    OfferDetailComponent,
    CreateOfferComponent,
    ProfileComponent,
    ShowProfileComponent,
    EditProfileComponent,
    WelcomeProfileComponent
  ],
  providers: [
    OffersService,
    BggService,
    ConstantHelper,
    ActiveUserGuard
  ]
})

export class GeneralLayoutModule {}
