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

  @Input() todos: boolean;
  @Input() required: boolean;

  @Input() restaurant;
  @Output() restaurantChange = new EventEmitter();

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getAll().subscribe(
      (data) => {
        this.restaurants = data;
      },
      (err) => {
        console.log('Erro ao carregar restaurantes (Restaurant Select)');
      }
    );
  }

  onChange(select) {
    this.restaurantChange.emit( select.value );
  }

}
