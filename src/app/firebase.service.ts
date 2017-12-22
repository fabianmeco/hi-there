import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFirestore, AngularFirestoreCollection  } from 'angularfire2/firestore'

import 'rxjs/add/operator/switchMap'
import 'rxjs/add/observable/combineLatest'
import 'rxjs/add/operator/map';

import * as firebase from 'firebase/app';
import { FirebaseApp } from 'angularfire2';
import { Promise } from 'q';

export interface User {name:string, photoURL:string, id:string};

@Injectable()

export class FirebaseService {
  private usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  constructor(public afAuth: AngularFireAuth, private afdb: AngularFirestore) {
    this.usersCollection = afdb.collection<User>('users');
    this.users = this.usersCollection.valueChanges();
   }
  onAuth() {
      let provider = new firebase.auth.GoogleAuthProvider();
      provider.addScope('profile');
      provider.addScope('email');
      return this.afAuth.auth.signInWithPopup(provider);
    
  }

  getUser(userId:string){
       return this.afdb.collection('users', ref => ref.where('id', '==', userId)).valueChanges();
  }

  getAllUsers(){
    return this.afdb.collection('users').valueChanges();
  }

  onSaveUser(user: User){     
       return this.usersCollection.add(user);         
  }

  /* onCheckLoggedIn() {
    return this.afAuth.auth.currentUser;
  } */
}