import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Injectable()

export class FirebaseService {

  constructor(public afAuth: AngularFireAuth) { }
  onAuth() {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      return this.afAuth.auth.signInWithPopup(provider);
    
  }

  onCheckLoggedIn() {
    return this.afAuth.auth.currentUser;
  }
}