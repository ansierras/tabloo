import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './auth-layout.component';
import { NgModule } from '@angular/core';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { LoginComponent } from 'src/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    // FormsModule,
  ],
  declarations: [
    AuthLayoutComponent,
    LoginComponent,
    // RegisterComponent,
    // RecoveryComponent
  ],
  providers: [
  ]
})

export class AuthLayoutModule {}
