import { Routes } from '@angular/router';

import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';
import { LoginComponent } from 'src/login/login.component';

export const AuthLayoutRoutes: Routes = [
  {path: '', component: AuthLayoutComponent, children: [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
    { path: 'login', component: LoginComponent },
    // { path: 'recuperar', component: RecoveryComponent },
    // { path: 'registro', component: RegisterComponent },
  ]},
];
