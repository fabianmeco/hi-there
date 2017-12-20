import { Component, OnInit, Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router'

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  constructor(public afAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
  }

  onLogin(){
    let provider = new firebase.auth.GoogleAuthProvider();
    let route = this.router;
    provider.addScope('profile');
    provider.addScope('email'),
    this.afAuth.auth.signInWithPopup(provider).then(function(response){
      console.log(response);
      if(response.credential){
        route.navigate(['/chat'])
      }
    }).catch();    
  }

}
