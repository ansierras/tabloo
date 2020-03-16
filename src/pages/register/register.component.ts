import { Component } from '@angular/core';
import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';
import { User } from 'src/models/interfaces';
import { Router } from '@angular/router';

@Component({
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email: string;
  password: string;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  onSignUp(): void {
    this.authService.signUpWithEmail(this.email, this.password).then(res => {
      const newUser: User = {
        name: '',
        lastName: '',
        avatarUrl: `https://robohash.org/${this.email}`,
        cityId: 1,
        role: 'user',
        state: 'registered'
      };
      this.userService.createNewUser(newUser, res.user.uid).then(() => {
        this.router.navigate([`../../general`]);
      });
    });
  }

}
