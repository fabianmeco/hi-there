import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { FirebaseService } from '../firebase.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = <User>{};
  constructor(private router: Router, public _firebaseService: FirebaseService) { }
  
  ngOnInit() {
  }

  onLogin(){    
      this._firebaseService.onAuth()
      .then((response) =>{
        
        this.user.name = response.user.displayName;
        this.user.photoURL = response.user.photoURL;
        this.user.id = response.user.uid;
        this._firebaseService.onSaveUser(this.user).then(user => this.router.navigate(['/chat']))         
      })
      .catch();
  }

}

interface User {
  photoURL: string;
  name:string;
  id: string;
}


