import { Component } from '@angular/core';
import { MessageService } from './message.service';
import * as io from 'socket.io-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sockets';
  public socket;
  public room;

  constructor(){
    this.socket = io("ws://localhost:8080/",{
      transports: ['websocket']
    });
    console.log(this.socket);
  }
  ngOnInit(): void {
    this.socket.on('/message',(text:any)=>{
      console.log(text);
    });
  }

  onCreateRoom(){
    this.socket.emit('/create',(text:any)=>{
      console.log(text);
      this.room=text;
    });
  }

  onJoinRoom(room:string){
    console.log(room);
    this.room=room;
    
    this.socket.emit('/join',{channel:room},(text:any)=>{
      console.log(text);
    });
  }

  onSend(m:string){
    console.log(m);
    
    this.socket.emit('/message',{text:m, channel:this.room});
  }

  





}
