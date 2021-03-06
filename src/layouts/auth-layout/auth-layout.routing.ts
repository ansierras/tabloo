import { Routes } from '@angular/router';

import { AuthLayoutComponent } from '../auth-layout/auth-layout.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { RegisterComponent } from 'src/pages/register/register.component';

export const AuthLayoutRoutes: Routes = [
  {path: '', component: AuthLayoutComponent, children: [
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full',
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    // { path: 'recuperar', component: RecoveryComponent },
    // { path: 'registro', component: RegisterComponent },
  ]},
];
