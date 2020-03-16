import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout.component';
import { NgModule } from '@angular/core';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { LoginComponent } from 'src/pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from 'src/pages/register/register.component';
import { AuthService } from 'src/services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
  ],
  declarations: [
    AuthLayoutComponent,
    LoginComponent,
    RegisterComponent,
    // RecoveryComponent
  ],
  providers: [
    AuthService
  ]
})

export class AuthLayoutModule {}
