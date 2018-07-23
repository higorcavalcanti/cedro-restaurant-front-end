import { TestBed, inject } from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import { RestaurantService } from './restaurant.service';

describe('RestaurantService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [RestaurantService]
    });
  });

  it('should be created', inject([RestaurantService], (service: RestaurantService) => {
    expect(service).toBeTruthy();
  }));
});
