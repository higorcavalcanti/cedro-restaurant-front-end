import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSelectComponent } from './restaurant-select.component';

describe('RestaurantSelectComponent', () => {
  let component: RestaurantSelectComponent;
  let fixture: ComponentFixture<RestaurantSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
