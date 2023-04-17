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




@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    IdentifCreateComponent,
    IdentifEditComponent,
    IdentifListComponent,
    IdentifViewComponent,
    RegisterCreateComponent,
    RegisterListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule



  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class AppModule {
}
