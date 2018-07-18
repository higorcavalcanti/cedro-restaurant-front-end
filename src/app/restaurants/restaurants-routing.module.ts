import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RestaurantListComponent} from './restaurant-list/restaurant-list.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule {
}
