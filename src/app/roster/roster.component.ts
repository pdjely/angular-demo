import { Component, OnInit } from '@angular/core';
import {RosterModelService} from '../roster-model.service';
import { Person } from '../person';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
  personnel = [];

  constructor(private rosterService: RosterModelService) { }

  ngOnInit() {
    this.personnel = this.rosterService.getRoster();
  }

  remove(person: Person) {
    this.rosterService.removePerson(person);
  }
}
