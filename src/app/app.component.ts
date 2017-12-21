import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from './firebase.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';  
  
  constructor(private route: Router, public _firebaseService: FirebaseService, public auth : AngularFireAuth){
   
           
  }

  ngOnInit(){
    this.auth.auth.onAuthStateChanged(response=>{
      if(response){
        console.log(response);
        return this.route.navigate(['/chat']);
      } 
      this.route.navigate(['/']);
    });
  }
}
