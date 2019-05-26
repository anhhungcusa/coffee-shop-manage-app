import { Injectable, EventEmitter } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable()
export class EEmitterService {

  // **order*/
  test = 1;
  selectedFood: EventEmitter<Food> = new EventEmitter<Food>();
  deletedFoodIndex: EventEmitter<number> = new EventEmitter<number>();
  selectedFoodForCusomer: EventEmitter<Food> = new EventEmitter<Food>();
  deletedFoodIndexForCusomer: EventEmitter<number> = new EventEmitter<number>();

  // **end order*/

  constructor() { }
}
