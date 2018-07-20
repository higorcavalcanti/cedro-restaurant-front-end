import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

// Model
import {Restaurant} from '../models/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) {
  }

  public getAll() {
    const URL = `${environment.API_URL}/restaurants`;
    return this.http.get<Restaurant[]>(URL);
  }

  public get(id: number|string) {
    const URL = `${environment.API_URL}/restaurants/${id}`;
    return this.http.get<Restaurant>(URL);
  }

  public create(restaurant: Restaurant) {
    const URL = `${environment.API_URL}/restaurants`;
    return this.http.post<Restaurant>(URL, restaurant);
  }

  public update(restaurant: Restaurant) {
    const URL = `${environment.API_URL}/restaurants/${restaurant.id}`;
    return this.http.put(URL, restaurant);
  }

  public delete(id: number|Restaurant) {
    if ( id instanceof Restaurant ) {
      id = id.id;
    }
    const URL = `${environment.API_URL}/restaurants/${id}`;
    return this.http.delete(URL);
  }
}
