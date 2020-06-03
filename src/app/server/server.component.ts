import { Component, OnInit,Input } from '@angular/core';
import {Server} from '../shared/Server';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  constructor() { }
@Input() serverInput:Server

  ngOnInit(): void {
    this.isServerOnline(this.serverInput.isOnline);
  }
 color:string;
 buttonText:string;

 isServerOnline(onlineStatus: boolean)
 {
  if(onlineStatus){
    this.serverInput.isOnline=true;
    this.color='#66BB6A';
    this.buttonText='Shut Down';
  }
  else {
    this.serverInput.isOnline=false;
    this.color='#FF6B6B';
    this.buttonText='Start';
  }
 }

  toggleStatus( onlineStatus: boolean){
       this.isServerOnline(!onlineStatus);
    }
  
}
