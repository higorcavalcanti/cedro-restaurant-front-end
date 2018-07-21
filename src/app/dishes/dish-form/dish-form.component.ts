import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

// Material
import {MatSnackBar} from '@angular/material';

// Model
import {Dish} from '../../models/dish';

// Service
import {DishesService} from '../../services/dishes.service';

@Component({
  selector: 'app-dish-form',
  templateUrl: './dish-form.component.html',
  styleUrls: ['./dish-form.component.scss']
})
export class DishFormComponent implements OnInit {

  protected isEditing: boolean;
  protected dish: Dish = {};

  constructor(private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar,
              private dishService: DishesService) {
  }

  ngOnInit() {
    this.isEditing = (this.route.snapshot.data.edit === true);
    if (this.isEditing) {
      this.loadDish();
    } else {
      this.dish = new Dish();
    }
  }

  goIndex() {
    this.router.navigate(['/dishes']);
  }

  loadDish() {
    const id = this.route.snapshot.paramMap.get('id');
    this.dishService.get(id).subscribe(
      (d) => {
        console.log('Prato', d);
        this.dish = d;
      },
      (err) => {
        console.log('Erro ao carregar prato', err);

        if (err.status === 404) {
          alert('O Prato informado não existe!');
        } else {
          alert('Falha ao obter prato. Por favor tente novamente');
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
      return this.dishService.update(this.dish);
    }
    return this.dishService.create(this.dish);
  }

  save() {
    this.getSaveFunction().subscribe(
      (r) => {
        console.log('Salvo', r);
        this.snackBar.open('Prato salvo com sucesso!', 'Fechar', {duration: 5000});
        this.goIndex();
      },
      (err) => {
        console.log('Erro ao salvar', err);
        this.snackBar.open('Falha ao salvar prato!', 'Fechar', {duration: 5000});
      }
    );
  }

}
