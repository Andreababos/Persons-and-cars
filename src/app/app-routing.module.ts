import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonComponent }  from './person/person.component';
import { CarsComponent }  from './cars/cars.component';
import { PeopleComponent }  from './people/people.component';

const routes: Routes = [
  { path: 'people', component: PeopleComponent },
  { path: '', redirectTo: '/people', pathMatch: 'full' },
  { path: 'person/:id', component: PersonComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
