import { Component, OnInit, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-message-create',
  templateUrl: './message-create.component.html',
  styleUrls: ['./message-create.component.css']
})
export class MessageCreateComponent {

  constructor() { }

  userName='';
  userMessage='';

  @Output() msgCreate = new EventEmitter();
  onAddMessage(){
    const msg={name:this.userName, message:this.userMessage}
    this.msgCreate.emit(msg);
  }



}
