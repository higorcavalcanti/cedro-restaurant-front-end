import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

// Provider
import {RestaurantService} from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-select',
  templateUrl: './restaurant-select.component.html',
  styleUrls: ['./restaurant-select.component.css']
})
export class RestaurantSelectComponent implements OnInit {

  protected restaurants = [];

  @Input() restaurant;
  @Output() restaurantChange = new EventEmitter();

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    console.log( 'Valor Padrao', this.restaurant )

    this.restaurantService.getAll().subscribe(
      (data) => {
        this.restaurants = data;
        this.restaurant = 3;
      },
      (err) => {
        console.log('Erro ao carregar restaurantes (Restaurant Select)');
      }
    );
  }

  onChange(select) {
    console.log('select', select);
    this.restaurantChange.emit( select.value );
  }

}
