import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import {RosterModelService} from '../roster-model.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnInit {
  personForm = new FormGroup({
    rank: new FormControl('', Validators.required),
    surname: new FormControl('', Validators.required),
    firstname: new FormControl('', Validators.required)
  });

  /**
   * Create new form component.
   * @param rosterService Injected service for roster data
   */
  constructor(private rosterService: RosterModelService) {
  }

  ngOnInit() { }

  /**
   * Insert new person into database
   */
  addPerson() {
    if (this.personForm.valid) {
      this.rosterService.insertPerson(this.personForm.value);
      this.personForm.reset();
    }
  }

  // Getters for validation
  get rank() { return this.personForm.get('rank'); };
  get surname() { return this.personForm.get('surname'); };
  get firstname() { return this.personForm.get('firstname'); };
}
