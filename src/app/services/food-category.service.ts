import { Injectable, EventEmitter } from '@angular/core';
import { FoodCategory, SelectedFoodCategory } from '../models/food-category.model';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { DataStorageService } from './data-storage.service';
import { AngularFireList } from '@angular/fire/database';
import { Logs } from 'selenium-webdriver';

@Injectable()
export class FoodCategoryService {
  static readonly FoodCategoryStorageKey = 'foodCategories';
  private foodCategories: AngularFireList<FoodCategory>;
  private length: number;
  private lengthSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  selectedFoodCategoryEmitter: EventEmitter<SelectedFoodCategory> = new EventEmitter<SelectedFoodCategory>();
  foodCategories$: Observable<FoodCategory[]>;
  length$: Observable<number> = this.lengthSubject.asObservable();

  constructor(
    private dataStorageService: DataStorageService
  ) {
    this.foodCategories = this.dataStorageService.getData<FoodCategory>(FoodCategoryService.FoodCategoryStorageKey);
    this.foodCategories$ = this.foodCategories.valueChanges();
    this.foodCategories$.subscribe( data => {
      this.length = data.length;
    });
  }

  fetchDataFromFireBase(){
    this.foodCategories$.subscribe( data => console.log(data));
  }

  addFoodCategory(value: any) {
    const newFoodCategory = new FoodCategory(this.length, value.name.toLocaleUpperCase(), value.status);
    return this.dataStorageService.addObject(this.foodCategories, `${this.length}`, newFoodCategory)
      .then(data => console.log('success: ', data))
      .catch(err => console.log('err :', err));
  }

  updateFoodCategory(value: FoodCategory, index: number) {
    return this.dataStorageService.updateObject(this.foodCategories, `${index}`, value)
      .then(data => console.log('success: ', data))
      .catch(err => console.log('err :', err));
  }

}
