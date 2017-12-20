import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FirebaseService } from './firebase.service';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WrapChatComponent } from './wrap-chat/wrap-chat.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ChatAreaComponent } from './chat-area/chat-area.component';
import {AppRoutingModule} from './app-routing.module';
import { SendMessageFieldComponent } from './send-message-field/send-message-field.component';
import { MessageFieldComponent } from './message-field/message-field.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WrapChatComponent,
    ContactsComponent,
    ChatAreaComponent,
    SendMessageFieldComponent,
    
    MessageFieldComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AppRoutingModule
    
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
