import {Component, Input, OnInit} from '@angular/core';
import {forwardRef} from '@angular/core';
import {
  AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors,
  Validator
} from '@angular/forms';

// Provider
import {RestaurantService} from '../../services/restaurant.service';

@Component({
  selector: 'app-restaurant-select',
  templateUrl: './restaurant-select.component.html',
  styleUrls: ['./restaurant-select.component.css'],
  exportAs: 'ngModel',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RestaurantSelectComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RestaurantSelectComponent),
      multi: true,
    }]
})
export class RestaurantSelectComponent implements OnInit, ControlValueAccessor, Validator {

  protected restaurants = [];
  protected restaurant: number;

  @Input() required: boolean;
  @Input() todos: boolean;

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getAll().subscribe(
      (data) => {
        this.restaurants = data;
      },
      (err) => {
        console.error('Erro ao carregar restaurantes (Restaurant Select)');
      }
    );
  }

  onChange(select) {
    this.propagateChange( select.value );
  }

  writeValue(obj: any): void {
    if (obj) {
      this.restaurant = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  validate(c: AbstractControl): ValidationErrors | any {
    return this.restaurant !== undefined;
  }

  private propagateChange = (_: any) => { };
}
