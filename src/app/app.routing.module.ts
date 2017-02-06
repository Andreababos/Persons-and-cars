import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonComponent }  from './person/person.component';
import { CarsComponent }  from './cars/cars.component';

const routes: Routes = [
  { path: 'person/:id', component: PersonComponent },
  { path: 'cars/:id', component: CarsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
