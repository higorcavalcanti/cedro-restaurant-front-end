import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {LayoutModule} from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatSlideToggleModule,
} from '@angular/material';
import {AppRoutingModule} from './app-routing.module';

// Providers
import {RestaurantService} from './services/restaurant.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // Angular
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Material:
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSlideToggleModule
  ],
  providers: [
    RestaurantService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
