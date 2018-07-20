import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RestaurantsRoutingModule} from './restaurants-routing.module';
import {RestaurantListComponent} from './restaurant-list/restaurant-list.component';
import {RestaurantFormComponent} from './restaurant-form/restaurant-form.component';
import {RestaurantTableComponent} from './restaurant-table/restaurant-table.component';

// Material
import {
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
} from '@angular/material';

// PrimeNG
import {FieldsetModule} from 'primeng/fieldset';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RestaurantsRoutingModule,
    // Material:
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    // PrimeNG
    FieldsetModule,
    TableModule,
  ],
  declarations: [RestaurantListComponent, RestaurantTableComponent, RestaurantFormComponent]
})
export class RestaurantsModule {
}
