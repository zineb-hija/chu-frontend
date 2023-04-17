import { Injectable } from '@angular/core';
import {Identif} from "../model/identif";
import {environment} from "../../../environment/environment";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Prestation} from "../model/prestation";

@Injectable({
  providedIn: 'root'
})
export class PrestationService {

  private _prestation!:Prestation;
  private  _prestations!: Array<Prestation>;
  private url = environment.BaseUrl + 'prestation/';

  public deleteByIdd(idd: number):Observable<number>{
    console.log('urll ==>' + this.url + 'idd/' + idd)
    return this.http.delete<number>(this.url + 'idd/' + idd);
  }
  public save():Observable<Prestation>{
    return this.http.post<Prestation>(this.url,this.prestation);
  }
  public findAll():Observable<Array<Prestation>>{
    return this.http.get<Array<Prestation>>(this.url);
  }

  constructor(private http:HttpClient) { }

  get prestation(): Prestation {
    if (this._prestation == null){
      this._prestation = new Prestation();
    }
    return this._prestation;
  }

  set prestation(value: Prestation) {
    this._prestation = value;
  }

  get prestations(): Array<Prestation> {
    if (this._prestations == null){
      this._prestations = new Array<Prestation>();
    }
    return this._prestations;
  }

  set prestations(value: Array<Prestation>) {
    this._prestations = value;
  }
}
