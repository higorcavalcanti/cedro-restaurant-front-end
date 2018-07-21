import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

// Model
import {Restaurant} from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private URL = `${environment.API_URL}/restaurants`;

  constructor(private http: HttpClient) {
  }

  public getAll() {
    return this.http.get<Restaurant[]>(`${this.URL}`);
  }

  public get(id: number | string) {
    return this.http.get<Restaurant>(`${this.URL}/${id}`);
  }

  public create(restaurant: Restaurant) {
    return this.http.post<Restaurant>(`${this.URL}/`, restaurant);
  }

  public update(restaurant: Restaurant) {
    return this.http.put(`${this.URL}/${restaurant.id}`, restaurant);
  }

  public delete(id: number) {
    return this.http.delete(`${this.URL}/${id}`);
  }
}
