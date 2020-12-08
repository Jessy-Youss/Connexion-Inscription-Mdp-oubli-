import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InfoComponent} from "./info/info.component"
import {ConnectionComponent} from "./connection/connection.component"
import{InscriptionComponent} from "./inscription/inscription.component"
import { NewMdpComponent } from './new-mdp/new-mdp.component'



const routes: Routes = [
  {
  path:'',
  redirectTo:'connection',
  pathMatch: 'full'
  },
  {path:'information/:id',component: InfoComponent },
  {path:'connection',component: ConnectionComponent },
  {path:'inscription',component: InscriptionComponent},
  {path:'mdp',component: NewMdpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
