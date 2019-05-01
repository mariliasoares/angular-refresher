import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; // tem que ter no minimo 1 modulo para cada angular project
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';
//                                    point at the file and this has to be a relative path
@NgModule({ // so pode ser posto na frente de uma classe
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonInputComponent
  ],
  imports: [
    BrowserModule, // importa o browser module dot slash app component
    FormsModule,
    HttpClientModule, // allow us to inject http cliente anywhere
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
