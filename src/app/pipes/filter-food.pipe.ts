import { Pipe, PipeTransform } from '@angular/core';
import { Food } from '../models/food.model';

@Pipe({
  name: 'filterFood'
})
export class FilterFoodPipe implements PipeTransform {

  transform(value: any[], idFoodCategory: string): any[] {
    if (value) {
      return value.filter(item => item.idFoodCategory === idFoodCategory);
    }
  }

}
