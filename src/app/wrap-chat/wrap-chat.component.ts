import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-wrap-chat',
  templateUrl: './wrap-chat.component.html',
  styleUrls: ['./wrap-chat.component.scss']
})
export class WrapChatComponent implements OnInit {
  @Output() idchatchange= new EventEmitter <string>();
  idchat: string;
  constructor() { }

  ngOnInit() {
  }

  onChangeChat(chat:string){    
    this.idchat = chat;
    this.onEmitChangeChat();
  }

  onEmitChangeChat(){
    console.log(this.idchat)
  }

}
