import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Car } from '../cars/car';
import { appService } from '../app.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  public car : Car;

  constructor(private appService : appService,
              private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.load(params['id'])
    });
  }
  public load(id){
    this.appService.getCars(id).subscribe(
      data => this.car = data,
    );
  }
}
