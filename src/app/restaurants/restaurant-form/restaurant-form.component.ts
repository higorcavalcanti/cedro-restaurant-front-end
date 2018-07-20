import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

// Model
import {Restaurant} from '../../models/restaurant';

// Service
import {RestaurantService} from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.scss']
})
export class RestaurantFormComponent implements OnInit {

  protected isEditing: boolean;
  protected restaurant: Restaurant = {};

  constructor(private router: Router,
              private route: ActivatedRoute,
              protected restauranteService: RestaurantService) { }

  ngOnInit() {
    this.isEditing = (this.route.snapshot.data.edit === true);
    if ( this.isEditing ) {
      this.loadRestaurant();
    } else {
      this.restaurant = new Restaurant();
    }
  }

  goIndex() {
    this.router.navigate(['/restaurants']);
  }

  loadRestaurant() {
    const id = this.route.snapshot.paramMap.get('id');
    this.restauranteService.get( id ).subscribe(
      (r) => {
        this.restaurant = r;
        console.log('Restaurante', r);
      },
      (err) => {
        console.log('Erro ao carregar restaurante', err);

        if (err.status === 404) {
          alert('O Restaurante informado não existe!');
        } else {
          alert('Falha ao obter restaurante. Por favor tente novamente');
        }
        this.goIndex();
      }
    );
  }

  cancel() {
    this.goIndex();
  }

  private getSaveFunction() {
    if (this.isEditing) {
      return this.restauranteService.update( this.restaurant );
    }
    return this.restauranteService.create( this.restaurant );
  }

  save() {
    this.getSaveFunction().subscribe(
      (r) => {
        console.log('Salvo', r);
        this.goIndex();
      },
      (err) => {
        console.log('Erro ao salvar', err);
      }
    );
  }

}
