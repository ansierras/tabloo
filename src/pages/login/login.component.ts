import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  email: string;
  password: string;

  constructor(
    private router: Router,
    private authService: AuthService) {}
  onSignIn(): void {
    this.authService.signInWithEmail(this.email, this.password).then((result) => {
      console.log(result);
      this.router.navigate([`../../general`]);
    });
  }
}
