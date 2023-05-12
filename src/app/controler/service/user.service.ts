import { Injectable } from '@angular/core';
import {Identif} from "../model/identif";
import {environment} from "../../../environment/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Register} from "../model/register";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user!:User;
  private  _users!: Array<User>;
  private url = environment.BaseUrl + 'user/';

  public deleteById(id: number):Observable<number>{
    console.log('urll ==>' + this.url + 'id/' + id)
    return this.http.delete<number>(this.url + 'id/' + id);
  }
  public save():Observable<User>{
    return this.http.post<User>(this.url,this.user);
  }
  public findAll():Observable<Array<User>>{
    return this.http.get<Array<User>>(this.url);
  }

  constructor(private http:HttpClient) { }

  get user(): User {
    if (this._user == null){
      this._user = new User();
    }
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get users(): Array<User> {
    if (this._users == null){
      this._users = new Array<User>();
    }
    return this._users;
  }

  set users(value: Array<User>) {
    this._users = value;
  }
}
