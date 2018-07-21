import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DishListComponent} from './dish-list/dish-list.component';
import {DishFormComponent} from './dish-form/dish-form.component';

const routes: Routes = [
  {
    path: '',
    component: DishListComponent,
    data: {
      title: 'Gerenciar Pratos'
    }
  },
  {
    path: 'add',
    component: DishFormComponent,
    data: {
      title: 'Adicionar Prato',
      edit: false
    }
  },
  {
    path: 'edit/:id',
    component: DishFormComponent,
    data: {
      title: 'Editar Prato',
      edit: true,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DishesRoutingModule {
}
