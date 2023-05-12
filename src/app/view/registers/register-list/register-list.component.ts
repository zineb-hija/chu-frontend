import { Component } from '@angular/core';
import {RegisterService} from "../../../controler/service/register.service";
import {Register} from "../../../controler/model/register";

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.css']
})
export class RegisterListComponent {
  constructor(private registerService:RegisterService) {
  }
  ngOnInit():void {
    this.finAll();
  }
  public deleteByRef(register:Register, index:number):void{
    console.log('haaa cin'+ register.cin);
    this.registerService.deleteById(register.id).subscribe(data=> {
      if (data >0){
        this.registers.splice(index, 1);
      }else {
        alert('DEL ERROR');
      }
    });
  }
  public finAll():void{
    this.registerService.findAll().subscribe(data=> this.registers=data);
  }
  get register(): Register {

    return this.registerService.register;
  }

  set register(value: Register) {
    this.registerService.register = value;
  }

  get registers(): Array<Register> {

    return this.registerService.registers;
  }

  set registers(value: Array<Register>) {
    this.registerService.registers = value;
  }

}
