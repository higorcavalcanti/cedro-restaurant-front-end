import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

// Model
import {Dish} from '../models/dish';

@Injectable({
  providedIn: 'root'
})
export class DishesService {

  private URL = `${environment.API_URL}/dishes`;

  constructor(private http: HttpClient) {
  }

  public getAll() {
    return this.http.get<Dish[]>(`${this.URL}`);
  }

  public get(id: number | string) {
    return this.http.get<Dish>(`${this.URL}/${id}`);
  }

  public create(dish: Dish) {
    return this.http.post<Dish>(`${this.URL}/`, dish);
  }

  public update(dish: Dish) {
    return this.http.put(`${this.URL}/${dish.id}`, dish);
  }

  public delete(id: number) {
    return this.http.delete(`${this.URL}/${id}`);
  }
}
