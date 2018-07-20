import {AfterViewInit, Component, OnInit} from '@angular/core';

// Providers
import {RestaurantService} from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit, AfterViewInit {

  protected filtro: any = {};
  protected restaurants;

  displayedColumns = ['name', 'opcoes'];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.restaurantService.getAll().subscribe(
      (data) => {
        this.restaurants = data;
        console.log('restaurantes', data);
      },
      (err) => {
        console.log('Erro', err);
      }
    );
  }

  remove(restaurant) {
    console.log('Remover', restaurant);
  }
}
