import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DiagramModule, SymbolPaletteModule } from '@syncfusion/ej2-angular-diagrams';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SymbolPaletteModule,
    AppRoutingModule,
    DiagramModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
