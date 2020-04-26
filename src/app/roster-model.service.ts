import { Injectable } from '@angular/core';
import { Person } from './person';

@Injectable({
  providedIn: 'root'
})
export class RosterModelService {
  personneldb: Person[] = [];   // personnel obj stored locally instead of on server

  constructor() { }

  getRoster(): Person[] {
    return this.personneldb;
  }

  insertPerson(person: Person) {
    // this would add to the database
    this.personneldb.push(person);
  }

  removePerson(person: Person) {
    // would normally use a unique ID from the database but since
    // this is local memory and non-persistent, object equivalence ok
    let idx = this.personneldb.indexOf(person);
    this.personneldb.splice(idx, 1);
  }
}
