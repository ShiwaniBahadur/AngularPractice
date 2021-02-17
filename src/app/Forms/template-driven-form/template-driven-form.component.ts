import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  constructor() { }

  users:any={}

  getValues(f:NgForm){
    alert("Success \n\n" + JSON.stringify(f.value))
  }

}
