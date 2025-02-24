import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';


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
import { WelcomeCreateComponent } from './view/welcome/welcome-create/welcome-create.component';
import {UserCreateComponent} from "./view/users/user-create/user-create.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




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
    UserCreateComponent,
    PrestationCreateComponent,
    PrestationEditComponent,
    PrestationListComponent,
    WelcomeCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule




  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class AppModule {
}
