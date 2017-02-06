import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Person } from './person/person';
import { Car } from './cars/car';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class appService{
  constructor(private http:Http) { }

  public getPeople (){
    return this.http.get('')
      .map(res => res.json() as Person[]);
  }
  public getPCars (){
    return this.http.get('')
      .map(res => res.json() as Car[]);
  }
}
