import { Component } from '@angular/core';
import {IdentifService} from "../../../controler/service/identif.service";
import {Identif} from "../../../controler/model/identif";
import {PrestationService} from "../../../controler/service/prestation.service";
import {Prestation} from "../../../controler/model/prestation";

@Component({
  selector: 'app-prestation-create',
  templateUrl: './prestation-create.component.html',
  styleUrls: ['./prestation-create.component.css']
})
export class PrestationCreateComponent {
  constructor(private prestationService:PrestationService) {
  }
  ngOnInit():void{}
  public save():void{
    this.prestationService.save().subscribe(data =>{
      if (data !=null){
        this.prestations.push({...this.prestation});
        //
        // this.prestationService.prestation = null;
        alert('SAVE SUCCESS');
      }else {
        alert('SAVE ERROR::: REF EXIST');
      }
    })
  }
  get prestation(): Prestation {

    return this.prestationService.prestation;
  }

  set prestation(value: Prestation) {
    this.prestationService.prestation = value;
  }

  get prestations(): Array<Prestation> {

    return this.prestationService.prestations;
  }

  set prestations(value: Array<Prestation>) {
    this.prestationService.prestations = value;
  }


}
