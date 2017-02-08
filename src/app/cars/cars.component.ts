import { Component, OnInit, Input } from '@angular/core';
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
  
  @Input () car;
  constructor(private appService : appService,
              private route: ActivatedRoute,
              private location: Location) { }


  ngOnInit() {
    this.appService.getCar(this.car).subscribe(
      data => this.car = data,
    );
  }
 
  
}
