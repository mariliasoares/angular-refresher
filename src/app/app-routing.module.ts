import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonsComponent } from './persons/persons.component';
import { PersonInputComponent } from './persons/person-input.component';


const routes: Routes = [
  { path: '', component: PersonsComponent },
  { path: 'input', component: PersonInputComponent }
];
// Routes é um array de javascript objects

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] // not the same, its going with our root routes registered
}) // here we need to tell angular about our routes

export class AppRoutingModule {}

// whhy this is a separate module? to keep app module clean and a nice way of outsourcing
