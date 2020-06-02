import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import axios from 'axios'
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-mdp',
  templateUrl: './new-mdp.component.html',
  styleUrls: ['./new-mdp.component.css']
})
export class NewMdpComponent implements OnInit {
newMdp : boolean
mdpChangeIdentique:boolean
err:boolean
email:string
mdpChange:string
mdpChangeConfirm:string
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  recupMail(){
    console.log(this.email)
    axios.get('http://localhost:8080/recupMail?email='+this.email).then((res)=>{
      console.log(res)
      if(res.data ==""){
        this.err = true
      }else{
        this.newMdp = true
        this.err = false
      }
    })
  }

  recup(f:NgForm){
    this.mdpChange = f.value['newMdp']
    this.mdpChangeConfirm = f.value['newMdpConfirm']
    if(this.mdpChange == this.mdpChangeConfirm){
      this.mdpChangeIdentique = false
      axios.post('http://localhost:8080/mdpChange',{mdp:this.mdpChange, email:this.email})
      setTimeout(() => {
        this.router.navigate(['connection'])
    },1000)
    }else{ this.mdpChangeIdentique = true}


  }

  cache(){
    this.newMdp = false
  }

  
  reset(){
    this.err = false
    this.mdpChangeIdentique = false
  }

}
