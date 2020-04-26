import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import {RosterModelService} from '../roster-model.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  person: Person = new Person();

  /**
   * Create new form component.
   * @param rosterService Injected service for roster data
   */
  constructor(private rosterService: RosterModelService) {
  }

  ngOnInit() { }

  /**
   * Insert new person into database
   * @param p Person
   */
  addPerson(p) {
    this.rosterService.insertPerson(p);
  }

  /**
   * Clear input form and create new Person object for two-way binding
   */
  clear() {
    this.person = new Person();
  }
}
