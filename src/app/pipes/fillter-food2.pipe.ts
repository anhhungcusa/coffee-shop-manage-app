import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fillterFood2'
})
export class FillterFood2Pipe implements PipeTransform {

  transform(value: any[], idFoodCategory: string): any[] {
    if (value) {
      return value.filter(item => item.idFoodCategory === idFoodCategory);
    }
  }

}
