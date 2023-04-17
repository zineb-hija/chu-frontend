import { Component } from '@angular/core';
import {IdentifService} from "../../../controler/service/identif.service";
import {Identif} from "../../../controler/model/identif";
import {PrestationService} from "../../../controler/service/prestation.service";
import {Prestation} from "../../../controler/model/prestation";

@Component({
  selector: 'app-prestation-list',
  templateUrl: './prestation-list.component.html',
  styleUrls: ['./prestation-list.component.css']
})
export class PrestationListComponent {
  constructor(private prestationService:PrestationService) {
  }
  ngOnInit():void {
    this.finAll();
  }
  public deleteByidd(prestation:Prestation, index:number):void{
    console.log('haaa idd'+ prestation.idd);
    this.prestationService.deleteByIdd(prestation.idd).subscribe(data=> {
      if (data >0){
        this.prestations.splice(index, 1);
      }else {
        alert('DEL ERROR');
      }
    });
  }
  public finAll():void{
    this.prestationService.findAll().subscribe(data=> this.prestations=data);
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
