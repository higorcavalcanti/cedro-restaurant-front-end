import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RestaurantsModule} from '../restaurants/restaurants.module';

import {DishesRoutingModule} from './dishes-routing.module';
import {DishListComponent} from './dish-list/dish-list.component';
import {DishFormComponent} from './dish-form/dish-form.component';

// PrimeNG
import {FieldsetModule} from 'primeng/fieldset';

// Material
import {
  MatTableModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule
} from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    DishesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // Meu
    RestaurantsModule,
    // PrimeNG
    FieldsetModule,
    // Material:
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  declarations: [DishListComponent, DishFormComponent]
})
export class DishesModule {
}
