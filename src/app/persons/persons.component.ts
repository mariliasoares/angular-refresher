import { Component, OnInit, OnDestroy } from '@angular/core';
import { PersonsService } from './persons.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})

export class PersonsComponent implements OnInit, OnDestroy { // this forces us to add the ngOnInit method
  personList: string[];
  isFetching = false;
  private personListSubs: Subscription;

  constructor(private prsService: PersonsService) { // only available in the constructor
  } // para pegar o serviço uso o dependency injection. tell angular which dependencies this component has

  ngOnInit() {
    this.personListSubs = this.prsService.personsChanged.subscribe(persons => {
      this.personList = persons;
      this.isFetching = false;
    });
    this.isFetching = true;
    this.prsService.fetchPersons();
  }

  onRemovePerson(personName: string) {
    this.prsService.removePerson(personName);
  }

  ngOnDestroy() { // this prevents memory leaks
    this.personListSubs.unsubscribe();
  }
}
