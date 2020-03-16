import { Routes } from '@angular/router';
import { GeneralLayoutComponent } from './general-layout.component';
import { MarketComponent } from 'src/pages/market/market.component';
import { OfferListComponent } from 'src/pages/offer-list/offer-list.component';
import { OfferDetailComponent } from 'src/pages/offer-detail/offer-detail.component';
import { CreateOfferComponent } from 'src/pages/create-offer/create-offer.component';
import { redirectUnauthorizedTo, AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { ProfileComponent } from 'src/pages/profile/profile.component';
import { WelcomeProfileComponent } from 'src/pages/profile/welcome/welcome-profile.component';
import { EditProfileComponent } from 'src/pages/profile/edit/edit-profile.component';
import { ShowProfileComponent } from 'src/pages/profile/show/show-profile.component';
import { map } from 'rxjs/operators';
import { ActiveUserGuard } from 'src/guards/active-user.guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['auth']);

export const GeneralLayoutRoutes: Routes = [
  {
    path: '', component: GeneralLayoutComponent, children: [
      // {
      //   path: '',
      //   redirectTo: 'market',
      //   pathMatch: 'full',
      // },
      {
        path: 'profile', component: ProfileComponent, children: [
          {
            path: '',
            redirectTo: 'show',
            pathMatch: 'full'
          },
          { path: 'welcome', component: WelcomeProfileComponent },
          { path: 'edit', component: EditProfileComponent },
          { path: 'show', component: ShowProfileComponent, canActivate: [ActiveUserGuard]},
        ]
      },
      { path: 'market', component: MarketComponent },
      { path: 'list/:id', component: OfferListComponent },
      { path: 'detail/:key', component: OfferDetailComponent },
      // tslint:disable-next-line:max-line-length
      { path: 'newoffer', component: CreateOfferComponent, canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectUnauthorizedToLogin } },
    ]
  },
];
