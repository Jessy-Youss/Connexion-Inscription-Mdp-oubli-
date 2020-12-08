import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios'


@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {
  email:string
  mdp: string
  compte: boolean
  id:number
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  recup(f:NgForm){
this.email = f.value['email']
this.mdp = f.value['mdp']
axios.get('http://localhost:8080/connection?email='+this.email+'&mdp='+this.mdp).then((res)=>{
    res.data == "" ? this.compte = true : this.compte = false
    this.id = res.data[0].id
    //redirection vers la page information en ajoutant en paramamètre l'id.
  this.router.navigate(['information',this.id]);  
    })
 
      
  }

  reset(){
    this.compte = false
  }


}
