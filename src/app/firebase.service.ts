import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabase } from 'angularfire2/database'


import 'rxjs/add/operator/map';

import * as firebase from 'firebase/app';

export interface User {name:string, photoURL:string, id:string};

@Injectable()

export class FirebaseService {
  
  
  constructor(public afAuth: AngularFireAuth, private afdb: AngularFireDatabase) {
    //this.users = afdb.list('users');
   }
  onAuth() {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      return this.afAuth.auth.signInWithPopup(provider);
    
  }

  onSaveUser(user: User){    
    this.afdb.list('users', ref=> ref.equalTo(user.id))
    return this.afdb.list('users').push(user);    
  }

  /* onCheckLoggedIn() {
    return this.afAuth.auth.currentUser;
  } */
}