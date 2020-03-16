import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './general-layout.component.html',
  styleUrls: []
})
export class GeneralLayoutComponent {
  constructor(
    private auth: AngularFireAuth,
    private router: Router) {}
  onSignOut(): void {
    this.auth.auth.signOut().then((res) => {
      this.router.navigate(['../']);
    });
  }
}
