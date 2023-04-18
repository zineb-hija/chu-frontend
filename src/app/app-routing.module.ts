import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IdentifCreateComponent} from "./view/identifs/identif-create/identif-create.component";
import {RegisterCreateComponent} from "./view/registers/register-create/register-create.component";
import {PrestationCreateComponent} from "./view/prestations/prestation-create/prestation-create.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: IdentifCreateComponent },
  { path: 'register', component: RegisterCreateComponent },
  { path: 'prestation', component: PrestationCreateComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
