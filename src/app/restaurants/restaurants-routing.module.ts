import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {RestaurantListComponent} from './restaurant-list/restaurant-list.component';
import {RestaurantTableComponent} from './restaurant-table/restaurant-table.component';

const routes: Routes = [
  {
    path: '',
    component: RestaurantListComponent,
    data: {
      title: 'Gerenciar Restaurantes'
    }
  },
  {
    path: 'table',
    component: RestaurantTableComponent,
    data: {
      title: 'Gerenciar Restaurantes Table'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantsRoutingModule {
}
