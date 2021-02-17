import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  Users!: User[];
  private subscription!: Subscription;


  constructor(
    private userService:UserService,
    private router: Router
  ) { }




  ngOnInit(){
    this.Users=this.userService.displayUser();

    // Receiving Values from Subscription
    this.subscription=this.userService.userChange.subscribe((user:User[])=>{this.Users=user})
    console.log(this.subscription);

  }

  onAddUser(f:NgForm){
    const newUserDetails = new User(f.value.username, f.value.email, f.value.contact, f.value.designation)
    this.userService.addUser(newUserDetails);
    alert("User Added Successfully");
    console.log(newUserDetails);
  }

  onDeleteUser(index:number){
    this.userService.DeleteUser(index);
    alert("User Deleted Successfully");
  }

  onEditUser(index:number){
    /* Simple navigation to other component
    this.router.navigateByUrl('/edit-user'); */

    // Navigation to other component with some value in url
    this.router.navigate(['/edit-user'],{queryParams: {id:index}});
  }

}
