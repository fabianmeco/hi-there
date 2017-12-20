import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router'
import { FirebaseService } from '../firebase.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, public _firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  onLogin(){    
      this._firebaseService.onAuth()
      .then((response) =>{this.router.navigate(['/chat'])})
      .catch();
  }

}


