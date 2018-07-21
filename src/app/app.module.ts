import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
} from '@angular/material';

// Providers
import {RestaurantService} from './services/restaurant.service';
import {DishesService} from './services/dishes.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    // Material:
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [
    RestaurantService,
    DishesService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
