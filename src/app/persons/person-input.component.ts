import { Component } from '@angular/core';
import { PersonsService } from './persons.service';

@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html', // posso ter só 1 template
  styleUrls: ['./person-input.component.css'] // mas posso ter multiplos estilos em varios arquivos por isso os colchetes.
})

export class PersonInputComponent {
  enteredPersonName = ''; // became a normal property of this component, now it can be used anywhere inside this component code]

  constructor(private prsService: PersonsService) {}

  onCreatePerson() {
    console.log('Created a person: ' + this.enteredPersonName);
    this.prsService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';
  }
}
