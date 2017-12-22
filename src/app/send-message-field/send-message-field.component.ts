import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FirebaseService } from '../firebase.service';
import { Subscription } from 'rxjs/Subscription';
import { ChangeChatService } from '../change-chat.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { ConversationService } from '../conversation.service'

@Component({
  selector: 'app-send-message-field',
  templateUrl: './send-message-field.component.html',
  styleUrls: ['./send-message-field.component.scss']
})
export class SendMessageFieldComponent implements OnInit {

  

  user: any = <User>{};
  private userid: string;
  subscription: Subscription;
  private texto: string;
  private message: Message = <Message>{};

  constructor(private _firebaseService: FirebaseService, private _chngechatService: ChangeChatService, private afAuth: AngularFireAuth, private _converService: ConversationService) {
    this.subscription = this._chngechatService.onGetNotification().subscribe(response => {
      this._firebaseService.getUser(response.id).subscribe(
        usuario => {
          this.user = usuario[0];
        }
      )
    })
  }

  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged(response => {
      if (response) {
        this.userid = response.uid;
      }
    })
  }
  onSentMessage() {
    this.message = { text: this.texto, sentBy: this.userid, date: Date.now().toString(), users: [this.userid, this.user.id] };
    this._firebaseService.onSaveMessage(this.message)
      .then(response => {
        this.texto="";
        this._converService.onNotifyChange([this.userid, this.user.id]);
      });
  }

}

interface User {
  photoURL: string;
  name: string;
  id: string;
}

interface Message { text: string, sentBy: string, date: string, users: any[] }