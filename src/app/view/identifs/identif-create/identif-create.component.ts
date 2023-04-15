import { Component } from '@angular/core';
import {IdentifService} from "../../../controler/service/identif.service";
import {Identif} from "../../../controler/model/identif";

@Component({
  selector: 'app-identif-create',
  templateUrl: './identif-create.component.html',
  styleUrls: ['./identif-create.component.css']
})
export class IdentifCreateComponent {
  constructor(private identifService:IdentifService) {
  }
  ngOnInit():void{}
  public save():void{
    this.identifService.save().subscribe(data =>{
      if (data !=null){
        this.identifs.push({...this.identif});
        //
        // this.identifService.identif = null;
        alert('SAVE SUCCESS');
      }else {
        alert('SAVE ERROR::: REF EXIST');
      }
    })
  }
  get identif(): Identif {

    return this.identifService.identif;
  }

  set identif(value: Identif) {
    this.identifService.identif = value;
  }

  get identifs(): Array<Identif> {

    return this.identifService.identifs;
  }

  set identifs(value: Array<Identif>) {
    this.identifService.identifs = value;
  }


}
