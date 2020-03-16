import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class AuthService {
  constructor(
    private auth: AngularFireAuth
  ) {}

  signInWithEmail(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return this.auth.auth.signInWithEmailAndPassword(email, password);
  }

  signUpWithEmail(email: string, password: string): Promise<any> {
    return this.auth.auth.createUserWithEmailAndPassword(email, password);
  }
}
