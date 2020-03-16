import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/interfaces';
import { UserService } from 'src/services/user.service';

@Component({
  templateUrl: './welcome-profile.component.html'
})
export class WelcomeProfileComponent implements OnInit {
  currentUser: User;

  constructor(
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
    console.log(this.currentUser);
  }
}
