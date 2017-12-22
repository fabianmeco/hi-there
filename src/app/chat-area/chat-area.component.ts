import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chat-area',
  templateUrl: './chat-area.component.html',
  styleUrls: ['./chat-area.component.scss']
})
export class ChatAreaComponent implements OnInit {
@Output() idchat = new EventEmitter <string> ();
  constructor() { }

  ngOnInit() {
  }
  onChngeChat(event: string){
    console.log(event)
  }

}
