import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor() { }

  savedMsg:any=[];
  onMessageCreate(msg: any){
    this.savedMsg.push(msg);
  }

  ngOnInit(): void {
  }

}
