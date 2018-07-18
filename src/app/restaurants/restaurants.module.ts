import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

@NgModule({
  imports: [
    CommonModule,
    RestaurantsRoutingModule
  ],
  declarations: [RestaurantListComponent]
})
export class RestaurantsModule { }
