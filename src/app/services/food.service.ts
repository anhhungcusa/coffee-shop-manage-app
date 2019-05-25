import { Injectable, EventEmitter } from '@angular/core';
import { DataStorageService } from './data-storage.service';
import { AngularFireList } from '@angular/fire/database';
import { Food, SelectedFood } from '../models/food.model';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { FoodCategoryService } from './food-category.service';
import { FoodCategory } from '../models/food-category.model';


@Injectable()
export class FoodService {

  static readonly FoodStorageKey = 'food';
  private foods: AngularFireList<Food>;
  private length: number;

  // selectedFoodEmitter: EventEmitter<SelectedFood> = new EventEmitter<SelectedFood>();
  // editStatusEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  foods$: Observable<Food[]>;
  foodsDisplay: Food[];
  foodCategories: FoodCategory[];

  constructor(
    private dataStorageService: DataStorageService,
    private foodCategoryService: FoodCategoryService
  ) {
    this.foods = this.dataStorageService.getData<Food>(FoodService.FoodStorageKey);
    this.foods$ = this.foods.valueChanges();
    this.foods$.subscribe(data => {
      this.length = data.length;
      this.foodsDisplay = data;
    });

    this.foodCategoryService.foodCategories$
    .subscribe((data: FoodCategory[]) => {
      this.foodCategories = [...data];
    });
  }

  convertToFormDatetimelocal(value: any): string {
    const tmpDate = new Date(value);
    let month: any = tmpDate.getMonth() + 1;
    let date: any  = tmpDate.getDate();
    let hours: any  = tmpDate.getHours();
    let minutes: any  = tmpDate.getMinutes() + 1;

    if ( month < 9 ) {
      month = `0${month}`;
    }
    if ( date < 9 ) {
      date = `0${date}`;
    }
    if ( hours < 9 ) {
      hours = `0${hours}`;
    }
    if ( minutes < 9 ) {
      minutes = `0${minutes}`;
    }
    return `${tmpDate.getFullYear()}-${month}-${date}T${hours}:${minutes}`;
  }

  getIndex(value: string) {
    let result = '';
    for(const i of value){
      if (i.charCodeAt(0) < 48 || i.charCodeAt(0) > 57) {
        return +result;
      }
      result += i;
    }

    return +result;
  }

  getValue(index: number) {
     return new Promise((resolve, reject) => {
       if (this.foodsDisplay) {
         resolve(this.foodsDisplay[index]);
       } else {
         let count = 0;
         const id = setInterval(() =>{
           count += 1;
           try {
            resolve(this.foodsDisplay[index]);
           } catch (error) {
             console.log('dang load thoi doi 1 ty')
           }

           if (this.foodsDisplay || count > 20) {
            clearInterval(id);
           }
          }, 500);
        //  reject('chua load xong');
       }
     })
  }

  addFood(value: any) {
    const newFood = new Food(
      this.length, value.idFoodCategory, value.name.toLocaleUpperCase(), value.imgUrl,
      value.price, `${new Date(value.updateDate)}`, value.isSelled
    )
    this.dataStorageService.addObject(this.foods, `${this.length}`, newFood)
      .then(data => console.log('success: ', data))
      .catch(err => console.log('err :', err));
  }

  updateFood(value: Food, index: number) {
    this.dataStorageService.updateObject(this.foods , `${index}`, value)
    .then(data => console.log('success: ', data))
    .catch(err => console.log('err :', err));
  }


}
