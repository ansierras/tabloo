import { Injectable } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class ActiveUserGuard implements CanActivate {
  constructor(
    private userService: UserService,
    private router: Router) { }

  canActivate() {
    if (this.userService.isActive()) {
      return true;
    } else {
      this.router.navigate(['general/profile/welcome']);
      return false;
    }
  }
}
