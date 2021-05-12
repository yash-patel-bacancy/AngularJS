/* import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'Sending-Image';
  selectedFile : File[]=[];

  constructor(private http: HttpClient) {}

  onFileChanged(event: any) {
    this.selectedFile[0] = event.target.files[0];
  }

  onUpload() {
    console.log(this.selectedFile[0]);
    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('avatar', this.selectedFile[0], this.selectedFile[0].name);
    this.http
      .post('http://192.168.2.129/upload.php', uploadData)
      .subscribe(
        (event) => {
          console.log(event); // handle event here
        },
        (error) => {
          console.log(error);
        }
      );
  }
} */

/* import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'photoupload';
  
  constructor(private http:HttpClient){
  }
  selectedFile:File=null;
  onFileChanged(event)
  {
    console.log(event);
    this.selectedFile=<File>event.target.files[0];
  }

  onUpload()  
  {
      const fd=new FormData();
      fd.append('avatar',this.selectedFile,this.selectedFile.name);
      //this.http.post('https://jsonplaceholder.typicode.com/posts',fd)
      this.http.post('http://192.168.2.129/upload.php',fd)
      .subscribe(res=>{
        console.log("Uploaded...");
      },
      error=>{
        console.log("Something Went wrong");
      });
  }
} */

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sending-Image';
  selectedFile: File=null;

  constructor(private http: HttpClient){}

  onFileChanged(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    // this.http is the injected HttpClient
    const fd=new FormData();
    fd.append('avatar',this.selectedFile,this.selectedFile.name);
    this.http.post('http://localhost/upload.php',fd)
      .subscribe(event => {
        console.log(event); // handle event here
      },
      error=>{
        console.log(error);

      });
  }
}
