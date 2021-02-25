import { Component, OnInit } from '@angular/core';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Amazing-Dishes';

  constructor(private authService: AuthService, private loggingService: LoggingService){}
  
  ngOnInit(){
    this.authService.autoLogin();
    this.loggingService.printLog('Hello from AppComponent ngOnInit');
  }
}
