import { Component, OnInit } from '@angular/core';
import {Server} from '../../shared/Server';
const SAMPLE_SERVER =[
  {id:1,name:'Dev-Web',isOnline:true},
  {id:2,name:'Dev-mail',isOnline:false},
  {id:3,name:'prod-web',isOnline:true},
  {id:4,name:'prod-mail',isOnline:false},

]

@Component({
  selector: 'app-section-health',
  templateUrl: './section-health.component.html',
  styleUrls: ['./section-health.component.css']
})
export class SectionHealthComponent implements OnInit {

  constructor() { }

  servers : Server[] = SAMPLE_SERVER;
  ngOnInit(): void {
  }

}
