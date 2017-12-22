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
export interface Conversation {users:string[], id:string}

@Injectable()

export class FirebaseService {
  private usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;

  private messageCollection: AngularFirestoreCollection<Message>;
  messages: Observable<Message[]>;

  private conversationCollection: AngularFirestoreCollection<Conversation>;
  conversation: Observable<Conversation[]>;


  constructor(public afAuth: AngularFireAuth, private afdb: AngularFirestore) {
    this.usersCollection = afdb.collection<User>('users');
    this.users = this.usersCollection.valueChanges();
    this.messageCollection = afdb.collection<Message>('messages');
    this.messages = this.messageCollection.valueChanges();
    this.conversationCollection = afdb.collection<Conversation>('conversations');
    this.conversation = this.conversationCollection.valueChanges();
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
    return this.afdb.collection('messages', ref => ref.where('users', '==', usersId).orderBy('date', 'asc')).valueChanges();
  }
  messagemessagemessagemessage
  onSaveConversation(conver: Conversation){
    return this.conversationCollection.add(conver);
  }

  onGetConversation(converId: string){
    return this.afdb.collection('conversations', ref => ref.where('id', '==', converId)).valueChanges();
  }

  /* onCheckLoggedIn() {
    return this.afAuth.auth.currentUser;
  } */
}