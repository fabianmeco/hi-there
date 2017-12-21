import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  username:string;
  photoURL:string;
  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.afAuth.auth.onAuthStateChanged(response=>{
      if(response){
        this.username = response.displayName;
        this.photoURL = response.photoURL;
      }       
    });
  }

}
