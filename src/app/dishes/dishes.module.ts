import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DishesRoutingModule } from './dishes-routing.module';
import { DishListComponent } from './dish-list/dish-list.component';

@NgModule({
  imports: [
    CommonModule,
    DishesRoutingModule
  ],
  declarations: [DishListComponent]
})
export class DishesModule { }
