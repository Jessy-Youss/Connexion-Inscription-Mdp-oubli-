import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  id:string
  info: any

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.id = this.route.snapshot.paramMap.get('id')
   axios.get('http://localhost:8080/information?id='+this.id).then((res)=>{
     this.info = res.data[0]
   })

  }
}
