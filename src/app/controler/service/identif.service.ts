import { Injectable } from '@angular/core';
import {Identif} from "../model/identif";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class IdentifService {
  private _identif!:Identif;
  private  _identifs!: Array<Identif>;
  private url = environment.BaseUrl + 'identif/';

  public deleteByIid(iid: number):Observable<number>{
    console.log('urll ==>' + this.url + 'iid/' + iid)
    return this.http.delete<number>(this.url + 'iid/' + iid);
  }
  public save():Observable<Identif>{
    return this.http.post<Identif>(this.url,this.identif);
  }
  public findAll():Observable<Array<Identif>>{
    return this.http.get<Array<Identif>>(this.url);
  }

  constructor(private http:HttpClient) { }

  get identif(): Identif {
    if (this._identif == null){
      this._identif = new Identif();
    }
    return this._identif;
  }

  set identif(value: Identif) {
    this._identif = value;
  }

  get identifs(): Array<Identif> {
    if (this._identifs == null){
      this._identifs = new Array<Identif>();
    }
    return this._identifs;
  }

  set identifs(value: Array<Identif>) {
    this._identifs = value;
  }
}
