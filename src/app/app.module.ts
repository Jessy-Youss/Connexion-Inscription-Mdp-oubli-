import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {InfoComponent} from "./info/info.component"
import {ConnectionComponent} from "./connection/connection.component";
import { InscriptionComponent } from './inscription/inscription.component';
import { NewMdpComponent } from './new-mdp/new-mdp.component'

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    ConnectionComponent,
    InscriptionComponent,
    NewMdpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
