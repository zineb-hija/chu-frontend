import { Component } from '@angular/core';
import {RegisterService} from "../../../controler/service/register.service";
import {Register} from "../../../controler/model/register";

@Component({
  selector: 'app-register-create',
  templateUrl: './register-create.component.html',
  styleUrls: ['./register-create.component.css']
})
export class RegisterCreateComponent {
  constructor(private registerService:RegisterService) {
  }
  ngOnInit():void{}
  public save():void{
    this.registerService.save().subscribe(data =>{
      if (data !=null){
        this.registers.push({...this.register});
        //
        // this.registerService.register = null;
        alert('SAVE SUCCESS');
      }else {
        alert('SAVE ERROR::: REF EXIST');
      }
    })
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

