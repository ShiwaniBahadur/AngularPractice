import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent {

  constructor() { }

  @Input() userDetails: any =[
    // {
    //   name: "Arun",
    //   message:"Hi this is Arun"
    // },
    // {
    //   name: "Kirti",
    //   message:"Hi this is Kirti"
    // }
  ]

}
