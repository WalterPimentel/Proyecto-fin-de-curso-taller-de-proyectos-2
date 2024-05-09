import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OdontogramaAnatomicoComponent } from './odontograma-anatomico/odontograma/odontograma.component';

@NgModule({
  declarations: [
    AppComponent,
    OdontogramaAnatomicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
