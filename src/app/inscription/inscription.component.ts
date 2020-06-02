import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import axios from 'axios'
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  userForm:FormGroup
  nom:string
  prenom:string
  mail:string
  mdp:string

  constructor(private fb:FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      nom:["",Validators.required],
      prenom:["",Validators.required],
      mail:["",[Validators.required,Validators.email]],
      mdp:["",[Validators.required,Validators.minLength(4)]],
    });
  }

  submitForm(){
    this.nom = this.userForm.get('nom').value
    this.prenom = this.userForm.get('prenom').value
    this.mail = this.userForm.get('mail').value
    this.mdp = this.userForm.get('mdp').value
    axios.post('http://localhost:8080/inscription',{nom:this.nom,prenom:this.prenom, mail:this.mail,mdp:this.mdp
    })
    setTimeout(() => {
      this.router.navigate(['connection'])
  },1000)
}

creation(){
  
}

}
