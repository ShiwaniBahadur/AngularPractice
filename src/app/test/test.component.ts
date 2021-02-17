import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  title = 'practice';
  msg='';
  imgUrl = "../assets/Shop.jpg";
  userValue = "Pre Set Value";
  usernames = ["Anna", "Ben", "Cassie", "Dean", "Elena"]
  userdata = [
  {name:"Anna", age:"25", desgination:"Senior Developer"},
  {name:"Ben", age:"26", desgination:"Manager"},
  {name:"Cassie", age:"24", desgination:"Junior Developer"},
  {name:"Dean", age:"28", desgination:"Senior Manager"},
  {name:"Elena", age:"23", desgination:"Intern"}
  ]
  // addMessage(postInput:HTMLTextAreaElement){
  //   this.msg=postInput.value;
  //   this.msg="Content to be dispalyed";
  // }
  addMessage(){
    this.msg=this.userValue;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
