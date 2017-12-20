import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from './firebase.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';  
  
  constructor(private route: Router, public _firebaseService: FirebaseService){
    console.log('Pasa por aquí')
    let response = this._firebaseService.onCheckLoggedIn();
    console.log(response);
       if(response){         
         this.route.navigate(['/chat'])
       }     
  }
}
