import { Component } from '@angular/core';
import {UserService} from "../../../controler/service/user.service";
import {User} from "../../../controler/model/user";




@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent {
  constructor(private userService:UserService) {
  }
  ngOnInit():void{}
  public save():void{
    this.userService.save().subscribe(data =>{
      if (data !=null){
        this.users.push({...this.user});
        //
        // this.registerService.register = null;
        alert('SAVE SUCCESS');
      }else {
        alert('SAVE ERROR::: REF EXIST');
      }
    })
  }
  get user(): User {

    return this.userService.user;
  }

  set user(value: User) {
    this.userService.user = value;
  }

  get users(): Array<User> {

    return this.userService.users;
  }

  set users(value: Array<User>) {
    this.userService.users = value;
  }

}

