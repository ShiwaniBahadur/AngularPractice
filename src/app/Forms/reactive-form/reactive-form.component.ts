import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{

  RegisterForm!:FormGroup
  submitted = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(){
    this.RegisterForm=this.formBuilder.group({
      title: ['', Validators.required],
      username: ['', Validators.required],
      useremail: ['', [Validators.required, Validators.email]],
      userpassword: ['', [Validators.required, Validators.minLength(7)]],
      cuserpassword: ['', Validators.required],
      terms: ['', Validators.required]

    },
    {
      validator: MustMatch('userpassword', 'cuserpassword')
    }
    )
  }

  // get the easier access to the form controllers
  get f(){
    return this.RegisterForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.RegisterForm.invalid){
      return;
    }

    else alert("Success \n\n" + JSON.stringify(this.RegisterForm.value));
  }

  onReset(){
    this.submitted=false;
    this.RegisterForm.reset();
  }
}
