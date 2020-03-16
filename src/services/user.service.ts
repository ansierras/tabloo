import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { userActiveStates } from 'src/constants/states-and-roles';
import { map } from 'rxjs/operators';
import { User, OfferOwner } from 'src/models/interfaces';

@Injectable()
export class UserService {
  currentUser: User;
  constructor(
    private afs: AngularFirestore,
    private auth: AngularFireAuth
  ) {
  }

  setCurrentUser(fUser: firebase.User): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.afs.doc<User>(`users/${fUser.uid}`).valueChanges().subscribe(cUser => {
        this.currentUser = cUser;
        this.currentUser.key = fUser.uid;
        resolve(true);
      });
    });
  }

  createNewUser(user: User, userId: string): Promise<void> {
    return this.afs.collection<User>('users').doc(userId).set(user);
  }

  updateUser(updates: any): Promise<void> { // OJO AQUI!!!
    if (this.currentUser && this.currentUser.key) {
      return this.afs.doc<User>(`users/${this.currentUser.key}`).update(updates);
    }
  }

  getCurrentUser(): User {
    return this.currentUser;
  }

  getUserSignature(): OfferOwner {
    return {
      name: this.currentUser.name,
      lastName: this.currentUser.lastName,
      avatarUrl: this.currentUser.avatarUrl
    };
  }

  isActive(): boolean {
    if (this.currentUser) {
      return userActiveStates.includes(this.currentUser.state);
    } else {
      return false;
    }
  }
}
