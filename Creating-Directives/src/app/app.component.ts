import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Creating-Directives';

  oddNumbers=[1,3,5];
  evenNumbers=[2,4];
  onlyOdd=false;
  value=2;
}
