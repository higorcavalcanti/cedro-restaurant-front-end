import {AfterViewInit, Component, OnInit} from '@angular/core';

// Material
import {MatSnackBar} from '@angular/material';

// Provider
import {DishesService} from '../../services/dishes.service';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit, AfterViewInit {

  filtro: { name?: string, restaurant?: number } = { name: '' };

  // Pratos
  private _dishes;
  protected set dishes(r) {
    this._dishes = r;
  }
  protected get dishes() {
    if (!this._dishes) {
      return [];
    }
    return this._dishes.filter(d => {
      const check1 = (d.name.toLowerCase().indexOf( this.filtro.name.toLowerCase() ) >= 0);
      let check2 = true;
      if (this.filtro.restaurant) {
        check2 = d.restaurantId == this.filtro.restaurant;
      }
      return check1 && check2;
    });
  }

  displayedColumns = ['name', 'restaurant', 'price', 'opcoes'];

  constructor(private snackBar: MatSnackBar,
              private dishesService: DishesService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.dishesService.getAll().subscribe(
      (data) => {
        this.dishes = data;
        console.log('Pratos', data);
      },
      (err) => {
        console.log('Erro', err);
      }
    );
  }

  remove(dish) {
    console.log('Remover', dish);
    if (confirm(`Deseja realmente remover o prato '${dish.name}'?`)) {
      this.dishesService.delete(dish.id).subscribe(
        (data) => {
          this.snackBar.open('Prato removido com sucesso!', 'Fechar', {duration: 5000});
          this._dishes = this._dishes.filter(item => {
            return item.id !== dish.id;
          });
        },
        (err) => {
          console.log('Erro apagar', err);
          this.snackBar.open('Falha ao remover prato!', 'Fechar');
        }
      );
    }
  }
}
