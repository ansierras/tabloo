import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { UserService } from 'src/services/user.service';
import { AppInitService } from 'src/services/app-init.service';

export function appInit(appInitService: AppInitService) {
  return () => appInitService.load();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [
    AngularFireAuthGuard,
    UserService,
    AppInitService,
    {
      provide: APP_INITIALIZER,
      useFactory: appInit,
      multi: true,
      deps: [AppInitService]
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
