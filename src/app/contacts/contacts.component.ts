import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { FirebaseService } from '../firebase.service';
import { ChangeChatService } from '../change-chat.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  user: User = <User>{};
  contacts : any = <User[]>{};

  @Output() idchat = new EventEmitter<string>();
  constructor(public afAuth: AngularFireAuth, public _firebaseService: FirebaseService, private _changeChatService: ChangeChatService) { }

  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged(response=>{
      console.log(response)
      if(response){
        this.user.name = response.displayName;
        this.user.photoURL = response.photoURL;
        this.user.id = response.uid;        
        this._firebaseService.getAllUsers().subscribe( response =>{
         this.contacts = response;
        })
      }       
    });

  }

  onSelectChat(event:any){
    this._changeChatService.onNotifyChange(event.target.id);
  }

}
interface User {
  photoURL: string;
  name: string;
  id: string;
}