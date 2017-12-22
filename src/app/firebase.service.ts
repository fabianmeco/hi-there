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
export interface Message {text: string, sentBy: string, date: string, users:string[]}
@Injectable()

export class FirebaseService {
  private usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  private messageCollection: AngularFirestoreCollection<Message>;
  messages: Observable<Message[]>;

  constructor(public afAuth: AngularFireAuth, private afdb: AngularFirestore) {
    this.usersCollection = afdb.collection<User>('users');
    this.users = this.usersCollection.valueChanges();
    this.messageCollection = afdb.collection<Message>('messages');
    this.messages = this.messageCollection.valueChanges();

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

  onSaveMessage(message: Message){
    return this.messageCollection.add(message);
  }

  onGetMessagesConver(usersId:string[]){
    return this.afdb.collection('messages', ref => ref.where('users', '==', usersId)).valueChanges();
  }

  /* onCheckLoggedIn() {
    return this.afAuth.auth.currentUser;
  } */
}