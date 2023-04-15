import { Injectable } from '@angular/core';
import {Identif} from "../model/identif";
import {environment} from "../../../environment/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Register} from "../model/register";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private _register!:Register;
  private  _registers!: Array<Register>;
  private url = environment.BaseUrl + 'register/';

  public deleteById(id: number):Observable<number>{
    console.log('urll ==>' + this.url + 'id/' + id)
    return this.http.delete<number>(this.url + 'id/' + id);
  }
  public save():Observable<Register>{
    return this.http.post<Register>(this.url,this.register);
  }
  public findAll():Observable<Array<Register>>{
    return this.http.get<Array<Register>>(this.url);
  }

  constructor(private http:HttpClient) { }

  get register(): Register {
    if (this._register == null){
      this._register = new Register();
    }
    return this._register;
  }

  set register(value: Register) {
    this._register = value;
  }

  get registers(): Array<Register> {
    if (this._registers == null){
      this._registers = new Array<Register>();
    }
    return this._registers;
  }

  set registers(value: Array<Register>) {
    this._registers = value;
  }
}
