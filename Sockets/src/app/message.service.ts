import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public socket;
  public text: string =null;
  public msg: string="hello";

  constructor() { 
     this.socket = io("ws://localhost:8080/",{
       transports: ['websocket']
    });
    console.log(this.socket);
  }

  sendMessage(msg:string){
    this.socket = io("ws://localhost:8080/",{
      transports: ['websocket']
    });
    console.log(this.socket);

    this.socket.emit('/create',(text:any)=>{
      console.log(text, "aacc");
    });

  }

}
