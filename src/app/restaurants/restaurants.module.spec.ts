import { RestaurantsModule } from './restaurants.module';

describe('RestaurantsModule', () => {
  let restaurantsModule: RestaurantsModule;

  beforeEach(() => {
    restaurantsModule = new RestaurantsModule();
  });

  it('should create an instance', () => {
    expect(restaurantsModule).toBeTruthy();
  });
});
