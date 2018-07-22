import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RestaurantsRoutingModule} from './restaurants-routing.module';
import {RestaurantListComponent} from './restaurant-list/restaurant-list.component';
import {RestaurantFormComponent} from './restaurant-form/restaurant-form.component';
import {RestaurantSelectComponent} from './restaurant-select/restaurant-select.component';

// PrimeNG
import {FieldsetModule} from 'primeng/fieldset';

// Material
import {
  MatTableModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatSnackBarModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RestaurantsRoutingModule,
    // PrimeNG
    FieldsetModule,
    // Material:
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatSelectModule,
  ],
  exports: [
    RestaurantSelectComponent
  ],
  declarations: [RestaurantListComponent, RestaurantFormComponent, RestaurantSelectComponent]
})
export class RestaurantsModule {
}
