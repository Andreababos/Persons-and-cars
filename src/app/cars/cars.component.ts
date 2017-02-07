import { Component, Input, OnInit } from '@angular/core';

import { Car } from '../cars/car';
import { appService } from '../app.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  @Input () car;

  constructor(private appService : appService) { }


  ngOnInit() {
    this.appService.getCar(this.car).subscribe(
      data => this.car = data,
    );
  }
}
