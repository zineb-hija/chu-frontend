import {Component, OnInit} from '@angular/core';
import {IdentifService} from "../../../controler/service/identif.service";
import {Identif} from "../../../controler/model/identif";

@Component({
  selector: 'app-identif-list',
  templateUrl: './identif-list.component.html',
  styleUrls: ['./identif-list.component.css']
})
export class IdentifListComponent implements OnInit {
  constructor(private identifService:IdentifService) {
  }
  ngOnInit():void {
    this.finAll();
  }
  public deleteByiid(identif:Identif, index:number):void{
    console.log('haaa iid'+ identif.iid);
    this.identifService.deleteByIid(identif.iid).subscribe(data=> {
      if (data >0){
        this.identifs.splice(index, 1);
      }else {
        alert('DEL ERROR');
      }
    });
  }
  public finAll():void{
    this.identifService.findAll().subscribe(data=> this.identifs=data);
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
