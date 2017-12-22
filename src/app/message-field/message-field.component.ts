import { Component, OnInit, Input } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { FirebaseService } from '../firebase.service';
import { Subscription, ISubscription } from 'rxjs/Subscription';

import {ChangeChatService} from '../change-chat.service';
import {ConversationService} from '../conversation.service'

@Component({
  selector: 'app-message-field',
  templateUrl: './message-field.component.html',
  styleUrls: ['./message-field.component.scss']
})

export class MessageFieldComponent implements OnInit {

user: any = <User> {};
messages : any = <Message>{};
subscription: Subscription;
msgSubs: ISubscription;

  constructor(private router: Router ,public afAuth: AngularFireAuth, public _firebaseService : FirebaseService, private _chgchatService: ChangeChatService, private _converService: ConversationService) {
    this.subscription = this._chgchatService.onGetNotification().subscribe(response=>{ 
      this._firebaseService.getUser(response.id).subscribe(
        usuario =>{
          this.user = usuario[0];
        }
      )
     })
     this.msgSubs = this._converService.onGetNotification().subscribe(response =>{
       this._firebaseService.onGetMessagesConver(response).subscribe(
         mssges =>{
           console.log(mssges);
            this.messages=mssges;
         }
        )
     })
   }

  ngOnInit() {
  }
  onLogout(){
    this.afAuth.auth.signOut()
    .then(user => this.router.navigate(['/']))
  } 
}

interface User {
  photoURL: string;
  name: string;
  id: string;
}
interface Message { text: string, sentBy: string, date: string, users: any[] }