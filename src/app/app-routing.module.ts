import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IdentifCreateComponent} from "./view/identifs/identif-create/identif-create.component";
import {RegisterCreateComponent} from "./view/registers/register-create/register-create.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: IdentifCreateComponent },
  { path: 'register', component: RegisterCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
