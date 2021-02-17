import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(
    private activatedroute: ActivatedRoute,
    private userService:UserService,
    private router: Router
  ) { }

  @ViewChild('updateForm', {static:false})
  newForm!: NgForm;

  index!: number;
  editUserProfile!: User;

  ngOnInit(){
    this.activatedroute.queryParams.subscribe( params =>{
      this.index=params['id'];
    })
    console.log(this.index);

    this.editUserProfile = this.userService.SelectedUser(this.index);
    console.log(this.editUserProfile);

    setTimeout(() => {
      this.newForm.form.patchValue({
        username: this.editUserProfile.username,
        email: this.editUserProfile.email,
        contact: this.editUserProfile.contact,
        designation: this.editUserProfile.designation
      });
    }, );

  }
  onUpdateUser(form:NgForm){
    const updateValues = new User(form.value.username, form.value.email, form.value.contact, form.value.designation);
    this.userService.UpdatedValues(this.index, updateValues);
    this.router.navigateByUrl('/add-user');
  }

}
