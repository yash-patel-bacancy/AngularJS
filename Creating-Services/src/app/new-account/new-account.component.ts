import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from'../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  //providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  constructor(private loggingService: LoggingService,
              private accountService: AccountsService) { 
    this.accountService.statusUpdated.subscribe(
      (status:string)=> alert('New Status: ' + status)
    );
  }
  ngOnInit(): void {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus);
    
    
    //this.loggingService.logStatusChange(accountStatus);
    /* const service = new LoggingService();
    service.logStatusChange(accountStatus); */
  }
}
