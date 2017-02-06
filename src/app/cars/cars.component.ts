import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Car } from '../cars/car';
import { appService } from '../app.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  public car=Car[];

  constructor(private appService : appService,
              private route: ActivatedRoute,
              private location: Location) { }


  ngOnInit() {
    this.appService.getCars().subscribe(
      data => this.car = data,
    );
  }

}
