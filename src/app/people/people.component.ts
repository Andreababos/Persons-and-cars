import { Component, OnInit } from '@angular/core';
import { Person } from '../person/person';
import { appService } from '../app.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [appService]
})
export class PeopleComponent implements OnInit {

  public person :Person[];

  constructor(private appService : appService) { }

  ngOnInit() {
    this.appService.getPeople().subscribe(
      data => this.person = data,
    );
  }

}
