import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AppInitService {
  constructor(
    private userService: UserService,
    private auth: AngularFireAuth
  ) {}
  load(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.auth.authState.subscribe(authstate => {
        if (authstate) {
          this.userService.setCurrentUser(authstate).then(() => {
            resolve(true);
          })
          .catch((error) => {
            console.log(error);
            resolve(false);
          });
        }
      });
    });
  }
}
