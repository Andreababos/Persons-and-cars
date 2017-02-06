import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Person } from './person';
import { appService } from '../app.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  public person: Person;

  constructor(private appService: appService,
              private route: ActivatedRoute,
              private location: Location) {
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.load(params['id'])
    });
  }

  public load(id) {
    this.appService.getPerson(id).subscribe(
      data => this.person = data,
    );
  }
}
