import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IdentifCreateComponent } from './view/identifs/identif-create/identif-create.component';
import { IdentifEditComponent } from './view/identifs/identif-edit/identif-edit.component';
import { IdentifListComponent } from './view/identifs/identif-list/identif-list.component';
import { IdentifViewComponent } from './view/identifs/identif-view/identif-view.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AppRoutingModule} from "./app-routing.module";
import { RegisterCreateComponent } from './view/registers/register-create/register-create.component';
import { RegisterListComponent } from './view/registers/register-list/register-list.component';
import { PrestationCreateComponent } from './view/prestations/prestation-create/prestation-create.component';
import { PrestationEditComponent } from './view/prestations/prestation-edit/prestation-edit.component';
import { PrestationListComponent } from './view/prestations/prestation-list/prestation-list.component';




@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    IdentifCreateComponent,
    IdentifEditComponent,
    IdentifListComponent,
    IdentifViewComponent,
    RegisterCreateComponent,
    RegisterListComponent,
    PrestationCreateComponent,
    PrestationEditComponent,
    PrestationListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule




  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class AppModule {
}
