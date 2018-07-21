import {AfterViewInit, Component, OnInit} from '@angular/core';

import {MatSnackBar} from '@angular/material';

// Providers
import {RestaurantService} from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit, AfterViewInit {

  // Filtro
  protected filtro: {name: string} = { name: ''};

  // Restaurantes
  private _restaurants;
  protected set restaurants(r) {
    this._restaurants = r;
  }
  protected get restaurants() {
    if (!this._restaurants) {
      return [];
    }
    return this._restaurants.filter(r => {
      return (r.name.toLowerCase().indexOf( this.filtro.name.toLowerCase() ) >= 0);
    });
  }

  displayedColumns = ['name', 'opcoes'];

  constructor(private snackBar: MatSnackBar,
              private restaurantService: RestaurantService) { }

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
    if (confirm(`Deseja realmente remover o restaurante '${restaurant.name}'?`)) {
      this.restaurantService.delete(restaurant.id).subscribe(
        (data) => {
          this.snackBar.open('Restaurante apagado com sucesso!', 'Fechar', {duration: 5000});
          this.restaurants = this.restaurants.filter(item => {
            return item.id !== restaurant.id;
          });
        },
        (err) => {
          console.log('Erro apagar', err);
          this.snackBar.open('Falha ao deletar restaurante!', 'Fechar');
        }
      );
    }
  }
}
