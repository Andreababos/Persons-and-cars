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
    return this.http.get('http://test.rithos.com/api-client/test/people')
      .map(res => res.json().data as Person[]);
  }
  public getPerson (id:number){
    return this.http.get('http://test.rithos.com/api-client/test/person?id='+id)
      .map(res => res.json().data as Person);
  }
  public getCars (id){
    return this.http.get('http://test.rithos.com/api-client/test/cars?id='+id)
      .map(res => res.json().data as Car[]);
  }
  public getCar (id){
    return this.http.get('http://test.rithos.com/api-client/test/car?id='+id)
      .map(res => res.json().data as Car);
  }
}
