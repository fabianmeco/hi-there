import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wrap-chat',
  templateUrl: './wrap-chat.component.html',
  styleUrls: ['./wrap-chat.component.scss']
})
export class WrapChatComponent implements OnInit {
  idchat:string="";
  constructor() { }

  ngOnInit() {
  }

  onChangeChat(chat:string){
    this.idchat=chat;
  }

}
