import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireAuthGuard, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectLoggedInInside = () => redirectLoggedInTo(['general/market']);

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  // tslint:disable-next-line:max-line-length
  {path: 'auth', loadChildren: '../layouts/auth-layout/auth-layout.module#AuthLayoutModule', canActivate: [AngularFireAuthGuard], data: { authGuardPipe: redirectLoggedInInside }},
  // tslint:disable-next-line:max-line-length
  {path: 'general', loadChildren: '../layouts/general-layout/general-layout.module#GeneralLayoutModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
