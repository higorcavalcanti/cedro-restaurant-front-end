import {Component, OnInit} from '@angular/core';

// Providers
import {RestaurantService} from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {

  protected filtro: any = {};
  public restaurants;

  displayedColumns = ['name', 'opcoes'];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
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

  editar(restaurant) {

  }
}
