import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root' // its called injectable because we can inject services into other components using
}) // a feature called dependency injection
// providedIn: root -> this will make sure that angular is aware of this service e pode injetar ele

export class PersonsService {
  personsChanged = new Subject<string[]>();
  persons: string[] = [];
  // podedefinir nosso tipo depois do nome antes da variavel persons: string[]/ number[] (Typescript)

  constructor(private http: HttpClient) {}

  fetchPersons() {
    this.http.get<any>('https://swapi.co/api/people/').pipe(map(resData => {
      return resData.results.map(character => character.name);
    })).subscribe(transformedData => {
      this.personsChanged.next(transformedData);
    });
  }

  addPerson(name: string) {
    this.persons.push(name);
    this.personsChanged.next(this.persons); // to pass the updated persons // send a new value
  }

  removePerson(name: string) {
    this.persons = this.persons.filter(person => {
      return person !== name;
    });
    this.personsChanged.next(this.persons);
  }
}
