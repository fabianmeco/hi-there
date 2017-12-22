import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import { Router } from '@angular/router'

@Component({
  selector: 'app-message-field',
  templateUrl: './message-field.component.html',
  styleUrls: ['./message-field.component.scss']
})
export class MessageFieldComponent implements OnInit {

  constructor(private router: Router ,public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }
  onLogout(){
    this.afAuth.auth.signOut()
    .then(user => this.router.navigate(['/']))
  }
}
