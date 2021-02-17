import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  userChange = new Subject<User[]>();

  private newUser:User[]=[
    new User('Anna', 'anna@gmail.com', '1234567890', 'Developer')
  ]

  // to add new user
  addUser(users:User){
    this.newUser.push(users);
    this.userChange.next(this.newUser.slice());
  }

  displayUser(){
    return this.newUser.slice();
  }

  //deleting user
  DeleteUser(index:number){
    this.newUser.splice(index,1);
    this.userChange.next(this.newUser.slice());
  }

  // View Selected User
  SelectedUser(index:number){
    return this.newUser[index];
  }

  //updating edited values
  UpdatedValues(index:number, updatedValues:User){
    this.newUser[index]=updatedValues;
    this.userChange.next(this.newUser.slice());
  }
}
