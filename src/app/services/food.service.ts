import { Injectable, EventEmitter } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { AngularFireList } from '@angular/fire/database';
import { Food, SelectedFood } from '../models/food.model';
import { Observable } from 'rxjs';


@Injectable()
export class FoodService {

  static readonly FoodStorageKey = 'food';
  private foods: AngularFireList<Food>;
  private length: number;

  selectedFoodEmitter: EventEmitter<SelectedFood> = new EventEmitter<SelectedFood>();
  foods$: Observable<Food[]>;

  constructor(private dataStorageService: DataStorageService) {
    this.foods = this.dataStorageService.getData<Food>(FoodService.FoodStorageKey);
    this.foods$ = this.foods.valueChanges();
    this.foods$.subscribe(data => {
      this.length = data.length;
    });
  }

  addFood(value: any) {
  }

  updateFood(value, index: number) {
  }


}
