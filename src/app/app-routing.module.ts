import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // {
  //   path: 'dashboard',
  //   loadChildren: './layouts/superadmin-layout/superadmin-layout.module#SuperadminLayoutModule',
  //   canActivate: [AuthGuardService, SuperadminGuardService]
  // },
  {path: 'auth', loadChildren: '../layouts/auth-layout/auth-layout.module#AuthLayoutModule'},
  {path: 'general', loadChildren: '../layouts/general-layout/general-layout.module#GeneralLayoutModule'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
