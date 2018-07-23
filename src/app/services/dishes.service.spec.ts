import {TestBed, inject} from '@angular/core/testing';
import {HttpClientModule} from '@angular/common/http';

import {DishesService} from './dishes.service';

describe('DishesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [DishesService]
    });
  });

  it('should be created', inject([DishesService], (service: DishesService) => {
    expect(service).toBeTruthy();
  }));
});
